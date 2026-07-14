"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Terminal as TerminalIcon, 
  Settings2, 
  Database, 
  Plus, 
  Trash2, 
  Activity, 
  Calendar, 
  Megaphone, 
  Briefcase, 
  ShieldAlert, 
  RefreshCw, 
  Clock, 
  MapPin, 
  ExternalLink,
  Code2,
  Cpu,
  Globe,
  Sliders
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Default mock data to reseed if empty
import { events as defaultEvents, Event, EventType } from "@/data/events"
import { announcements as defaultAnnouncements, Announcement } from "@/data/announcements"
import { projects as defaultProjects, Project } from "@/data/projects"

export default function AdminPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#090D16] flex items-center justify-center font-mono text-muted text-sm tracking-widest uppercase">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="h-6 w-6 animate-spin text-blue" />
          <span>Initializing Secure Terminal Session...</span>
        </div>
      </div>
    )
  }

  return <AdminDashboard />
}

function AdminDashboard() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"overview" | "events" | "announcements" | "projects" | "settings">("overview")

  // State data loaded from LocalStorage
  const [events, setEvents] = useState<Event[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  // Action log state
  const [logs, setLogs] = useState<string[]>([])
  const logTerminalEndRef = useRef<HTMLDivElement>(null)

  // System Stats
  const [cpuUsage, setCpuUsage] = useState(12)
  const [ramUsage, setRamUsage] = useState(48)

  // Form states for creating new items
  const [showEventForm, setShowEventForm] = useState(false)
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: "",
    type: "workshop",
    date: "",
    time: "",
    location: "",
    description: "",
    longDescription: "",
    image: "/images/events/workshop-1.jpg",
    registrationLink: "",
    isUpcoming: true
  })

  const [showAnnForm, setShowAnnForm] = useState(false)
  const [newAnn, setNewAnn] = useState<Partial<Announcement>>({
    title: "",
    type: "info",
    content: "",
    date: ""
  })

  const [showProjForm, setShowProjForm] = useState(false)
  const [rawProjTags, setRawProjTags] = useState("")
  const [newProj, setNewProj] = useState<Partial<Project>>({
    title: "",
    description: "",
    image: "/images/projects/website-1.jpg",
    tags: [],
    link: "",
    github: "",
    type: "featured"
  })

  // Add a log message helper
  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString("en-US", { hour12: false })
    setLogs((prev) => [...prev, `[${time}] ${message}`])
  }

  // Load from LocalStorage
  useEffect(() => {
    const localEvents = localStorage.getItem("sbg_events")
    const localAnnouncements = localStorage.getItem("sbg_announcements")
    const localProjects = localStorage.getItem("sbg_projects")

    let loadedEvents = defaultEvents
    let loadedAnns = defaultAnnouncements
    let loadedProjs = defaultProjects

    if (localEvents) {
      loadedEvents = JSON.parse(localEvents)
    } else {
      localStorage.setItem("sbg_events", JSON.stringify(defaultEvents))
    }

    if (localAnnouncements) {
      loadedAnns = JSON.parse(localAnnouncements)
    } else {
      localStorage.setItem("sbg_announcements", JSON.stringify(defaultAnnouncements))
    }

    if (localProjects) {
      loadedProjs = JSON.parse(localProjects)
    } else {
      localStorage.setItem("sbg_projects", JSON.stringify(defaultProjects))
    }

    setEvents(loadedEvents)
    setAnnouncements(loadedAnns)
    setProjects(loadedProjs)

    addLog("SYSTEM: Loaded database structures from LocalStorage.")
    addLog("SECURITY: Authorized session role: ADMIN.")
  }, [])

  // Auto-scroll logs to bottom
  useEffect(() => {
    logTerminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  // Simulated metrics changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(8 + Math.random() * 15))
      setRamUsage(Math.floor(45 + Math.random() * 5))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Save state back to localStorage
  const saveEvents = (updated: Event[]) => {
    setEvents(updated)
    localStorage.setItem("sbg_events", JSON.stringify(updated))
  }

  const saveAnnouncements = (updated: Announcement[]) => {
    setAnnouncements(updated)
    localStorage.setItem("sbg_announcements", JSON.stringify(updated))
  }

  const saveProjects = (updated: Project[]) => {
    setProjects(updated)
    localStorage.setItem("sbg_projects", JSON.stringify(updated))
  }

  // Reseed / Reset
  const handleReset = () => {
    saveEvents(defaultEvents)
    saveAnnouncements(defaultAnnouncements)
    saveProjects(defaultProjects)
    addLog("ACTION: Re-seeded default dataset successfully.")
  }

  // CRUD Actions
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newEvent.title || !newEvent.date) return

    const item: Event = {
      id: String(Date.now()),
      title: newEvent.title,
      slug: (newEvent.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      type: (newEvent.type as EventType) || "workshop",
      date: newEvent.date,
      time: newEvent.time || "02:00 PM - 05:00 PM",
      location: newEvent.location || "Virtual (Zoom)",
      description: newEvent.description || "",
      longDescription: newEvent.longDescription || "",
      image: newEvent.image || "/images/events/workshop-1.jpg",
      registrationLink: newEvent.registrationLink,
      isUpcoming: newEvent.isUpcoming ?? true
    }

    saveEvents([item, ...events])
    addLog(`EVENT_CREATED: "${item.title}" successfully indexed.`)
    setShowEventForm(false)
    setNewEvent({
      title: "",
      type: "workshop",
      date: "",
      time: "",
      location: "",
      description: "",
      longDescription: "",
      image: "/images/events/workshop-1.jpg",
      registrationLink: "",
      isUpcoming: true
    })
  }

  const handleDeleteEvent = (id: string, title: string) => {
    saveEvents(events.filter((e) => e.id !== id))
    addLog(`EVENT_DELETED: Removed "${title}" from tracking catalog.`)
  }

  const handleAddAnn = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAnn.title || !newAnn.content) return

    const item: Announcement = {
      title: newAnn.title,
      content: newAnn.content,
      type: newAnn.type || "info",
      date: newAnn.date || new Date().toISOString().split("T")[0]
    }

    saveAnnouncements([item, ...announcements])
    addLog(`ANNOUNCEMENT_CREATED: "${item.title}" broadcasts online.`)
    setShowAnnForm(false)
    setNewAnn({
      title: "",
      type: "info",
      content: "",
      date: ""
    })
  }

  const handleDeleteAnn = (title: string) => {
    saveAnnouncements(announcements.filter((a) => a.title !== title))
    addLog(`ANNOUNCEMENT_DELETED: Broadcast "${title}" deactivated.`)
  }

  const handleAddProj = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newProj.title || !newProj.description) return

    const item: Project = {
      title: newProj.title,
      description: newProj.description,
      image: newProj.image || "/images/projects/website-1.jpg",
      tags: rawProjTags.split(",").map(t => t.trim()).filter(Boolean),
      link: newProj.link,
      github: newProj.github,
      type: (newProj.type as any) || "featured"
    }

    saveProjects([item, ...projects])
    addLog(`PROJECT_INDEXED: "${item.title}" is now featured.`);
    setShowProjForm(false)
    setRawProjTags("")
    setNewProj({
      title: "",
      description: "",
      image: "/images/projects/website-1.jpg",
      tags: [],
      link: "",
      github: "",
      type: "featured"
    })
  }

  const handleDeleteProj = (title: string) => {
    saveProjects(projects.filter((p) => p.title !== title))
    addLog(`PROJECT_DELETED: De-registered "${title}".`)
  }

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F1F5F9] font-sans pb-16 pt-24">
      {/* Background static grid decorative element */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(66, 181, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 181, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Terminal Header */}
        <div className="rounded-2xl border border-border bg-[#161D26] p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Accent radial glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
          
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue/10 flex items-center justify-center border border-blue/20">
              <Sliders className="h-6 w-6 text-blue" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="font-serif text-2xl font-bold tracking-tight">Admin Console</h1>
                <span className="relative flex h-2 w-2 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
                </span>
              </div>
              <p className="text-xs font-mono text-muted uppercase mt-0.5 tracking-wider">AWS Student Builder Group • ROOT PRIVILEGES</p>
            </div>
          </div>

          {/* Sparkline status panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto font-mono text-[10px]">
            <div className="p-3 bg-slate-950/60 rounded-lg border border-border/40">
              <div className="text-muted uppercase tracking-wider mb-1">TUNNEL STATE</div>
              <div className="font-bold text-blue flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" /> SECURE_OK
              </div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-lg border border-border/40">
              <div className="text-muted uppercase tracking-wider mb-1">DB INSTANCE</div>
              <div className="font-bold text-blue flex items-center gap-1.5">
                <Database className="h-3.5 w-3.5" /> SYNC_LOCAL
              </div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-lg border border-border/40">
              <div className="text-muted uppercase tracking-wider mb-1">CPU LOAD</div>
              <div className="font-bold text-blue flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5" /> {cpuUsage}%
              </div>
            </div>
            <div className="p-3 bg-slate-950/60 rounded-lg border border-border/40">
              <div className="text-muted uppercase tracking-wider mb-1">RAM ALLOC</div>
              <div className="font-bold text-orange flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-orange" /> {ramUsage}%
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-border/40 mb-8 font-mono text-xs overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-5 py-4 border-b-2 font-medium uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "overview"
                ? "border-blue text-blue bg-blue/5"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            <Activity className="h-4 w-4" /> System Overview
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-5 py-4 border-b-2 font-medium uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "events"
                ? "border-blue text-blue bg-blue/5"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            <Calendar className="h-4 w-4" /> Manage Events ({events.length})
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-5 py-4 border-b-2 font-medium uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "announcements"
                ? "border-blue text-blue bg-blue/5"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            <Megaphone className="h-4 w-4" /> Announcements ({announcements.length})
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-4 border-b-2 font-medium uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "projects"
                ? "border-blue text-blue bg-blue/5"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            <Briefcase className="h-4 w-4" /> Featured Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-5 py-4 border-b-2 font-medium uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "settings"
                ? "border-orange text-orange bg-orange/5"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            <Settings2 className="h-4 w-4" /> System Settings
          </button>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[400px]">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="md:col-span-2 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Card className="bg-[#161D26] border-border/40">
                    <CardHeader className="pb-3">
                      <CardDescription className="font-mono text-[10px] uppercase text-muted">Total Events Registered</CardDescription>
                      <CardTitle className="font-mono text-4xl font-bold text-blue">{events.length}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-xs text-muted-foreground font-mono">
                        Upcoming active: {events.filter(e => e.isUpcoming).length}
                      </span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#161D26] border-border/40">
                    <CardHeader className="pb-3">
                      <CardDescription className="font-mono text-[10px] uppercase text-muted">Active Announcements</CardDescription>
                      <CardTitle className="font-mono text-4xl font-bold text-blue">{announcements.length}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-xs text-muted-foreground font-mono">
                        General Broadcast System
                      </span>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#161D26] border-border/40">
                    <CardHeader className="pb-3">
                      <CardDescription className="font-mono text-[10px] uppercase text-muted">Featured Projects</CardDescription>
                      <CardTitle className="font-mono text-4xl font-bold text-orange">{projects.length}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-xs text-muted-foreground font-mono">
                        AWS Community Builds
                      </span>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-[#161D26] border-border/40 p-6">
                  <h3 className="font-serif text-lg text-foreground mb-4">Command Center Info</h3>
                  <div className="space-y-4 font-mono text-xs leading-relaxed text-muted-foreground">
                    <p>
                      This custom administrative interface lets you modify variables stored within your local web database. 
                      Any changes made in this session (e.g. creating/deleting events) will be reflected across all views using local storage sync.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange animate-ping" />
                      <span>Complementary color balancing is enabled dynamically for headings and status controls.</span>
                    </p>
                  </div>
                </Card>
              </div>

              {/* Side Panel system diagnostics */}
              <div className="space-y-8">
                <Card className="bg-[#161D26] border-border/40 p-6">
                  <h3 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-orange" /> Security Protocols
                  </h3>
                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-3 bg-slate-950/60 rounded border border-border/40">
                      <div className="text-muted uppercase text-[9px]">ENCRYPT ALGO</div>
                      <div className="text-foreground mt-0.5">AES-256-GCM (Browser Safe)</div>
                    </div>
                    <div className="p-3 bg-slate-950/60 rounded border border-border/40">
                      <div className="text-muted uppercase text-[9px]">COMPLEMENTARY MATCH</div>
                      <div className="text-blue mt-0.5 flex justify-between">
                        <span>HUE_BLUE: 203°</span>
                        <span className="text-orange">HUE_ORANGE: 23°</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

            </div>
          )}

          {/* TAB 2: EVENTS */}
          {activeTab === "events" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="font-serif text-xl font-light text-foreground">Cataloged Events</h3>
                <Button 
                  onClick={() => setShowEventForm(!showEventForm)}
                  variant="primary" 
                  className="rounded-full gap-1.5 font-mono text-xs px-5 py-2"
                >
                  <Plus className="h-4 w-4" /> {showEventForm ? "Cancel Form" : "Create New Event"}
                </Button>
              </div>

              {showEventForm && (
                <Card className="bg-[#161D26] border border-blue/20 p-6 rounded-2xl">
                  <form onSubmit={handleAddEvent} className="space-y-4 text-sm">
                    <h4 className="font-serif text-lg text-foreground mb-4">Event Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Event Title</label>
                        <Input 
                          placeholder="e.g. AWS DeepRacer Competition" 
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                          required
                          className="bg-slate-950 border-border/60 text-white rounded-lg focus:border-blue/60"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Event Type</label>
                        <select 
                          className="w-full bg-slate-950 border border-border/60 text-white rounded-lg px-3 py-2 text-sm focus:border-blue/60 focus:ring-0"
                          value={newEvent.type}
                          onChange={(e) => setNewEvent({...newEvent, type: e.target.value as EventType})}
                        >
                          <option value="workshop">Workshop</option>
                          <option value="bootcamp">Bootcamp</option>
                          <option value="hackathon">Hackathon</option>
                          <option value="webinar">Webinar</option>
                          <option value="meetup">Meetup</option>
                          <option value="speaker_session">Speaker Session</option>
                          <option value="ctf">CTF</option>
                          <option value="gameday">Gameday</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Date</label>
                        <Input 
                          type="date"
                          value={newEvent.date}
                          onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                          required
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Time Range</label>
                        <Input 
                          placeholder="e.g. 10:00 AM - 04:00 PM" 
                          value={newEvent.time}
                          onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Location</label>
                        <Input 
                          placeholder="e.g. CS Building Audit / Online" 
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Short Summary Description</label>
                        <Input 
                          placeholder="Short summary for preview card" 
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Detailed Description</label>
                        <textarea 
                          placeholder="Deep content breakdown of event schedule, goals..." 
                          className="w-full bg-slate-950 border border-border/60 text-white rounded-lg p-3 text-sm min-h-[100px] focus:border-blue/60"
                          value={newEvent.longDescription}
                          onChange={(e) => setNewEvent({...newEvent, longDescription: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Registration Link</label>
                        <Input 
                          placeholder="https://..." 
                          value={newEvent.registrationLink}
                          onChange={(e) => setNewEvent({...newEvent, registrationLink: e.target.value})}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <input 
                          type="checkbox"
                          id="isUpcoming"
                          checked={newEvent.isUpcoming}
                          onChange={(e) => setNewEvent({...newEvent, isUpcoming: e.target.checked})}
                          className="rounded bg-slate-950 border-border text-blue focus:ring-0 focus:ring-offset-0 h-4 w-4"
                        />
                        <label htmlFor="isUpcoming" className="text-xs font-mono text-muted uppercase cursor-pointer">
                          Mark as Upcoming Event
                        </label>
                      </div>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="rounded-full text-xs font-mono text-muted"
                        onClick={() => setShowEventForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" variant="primary" className="rounded-full text-xs font-mono px-6">
                        Confirm Index Event
                      </Button>
                    </div>
                  </form>
                </Card>
              )}

              <div className="border border-border/40 rounded-xl overflow-hidden bg-slate-950/40">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border/40 bg-slate-950/80 text-muted uppercase tracking-wider text-[10px]">
                      <th className="p-4">Title</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">State</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20">
                    {events.map((e) => (
                      <tr key={e.id} className="hover:bg-card/20 transition-colors">
                        <td className="p-4 font-sans font-medium text-foreground">{e.title}</td>
                        <td className="p-4">
                          <Badge variant="outline" className="border-blue/20 text-blue bg-blue/5 text-[9px] uppercase tracking-wider">
                            {e.type}
                          </Badge>
                        </td>
                        <td className="p-4 text-muted-foreground">{e.date}</td>
                        <td className="p-4 text-muted-foreground max-w-[150px] truncate">{e.location}</td>
                        <td className="p-4">
                          {e.isUpcoming ? (
                            <Badge className="bg-orange/10 border border-orange/30 text-orange text-[9px] uppercase">
                              Upcoming
                            </Badge>
                          ) : (
                            <Badge className="bg-muted/10 border border-border/40 text-muted text-[9px] uppercase">
                              Past
                            </Badge>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full h-8 w-8 p-0"
                            onClick={() => handleDeleteEvent(e.id, e.title)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ANNOUNCEMENTS */}
          {activeTab === "announcements" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="font-serif text-xl font-light text-foreground">Announcements Board</h3>
                <Button 
                  onClick={() => setShowAnnForm(!showAnnForm)}
                  variant="primary" 
                  className="rounded-full gap-1.5 font-mono text-xs px-5 py-2"
                >
                  <Plus className="h-4 w-4" /> {showAnnForm ? "Cancel Form" : "Create Broadcast"}
                </Button>
              </div>

              {showAnnForm && (
                <Card className="bg-[#161D26] border border-blue/20 p-6 rounded-2xl">
                  <form onSubmit={handleAddAnn} className="space-y-4 text-sm">
                    <h4 className="font-serif text-lg text-foreground mb-4">New Broadcast details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Title / Heading</label>
                        <Input 
                          placeholder="e.g. Workshop Registration Open" 
                          value={newAnn.title}
                          onChange={(e) => setNewAnn({...newAnn, title: e.target.value})}
                          required
                          className="bg-slate-950 border-border/60 text-white rounded-lg focus:border-blue/60"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Broadcast Type</label>
                        <select 
                          className="w-full bg-slate-950 border border-border/60 text-white rounded-lg px-3 py-2 text-sm focus:border-blue/60 focus:ring-0"
                          value={newAnn.type}
                          onChange={(e) => setNewAnn({...newAnn, type: e.target.value as any})}
                        >
                          <option value="info">General Info</option>
                          <option value="warning">Important Alert</option>
                          <option value="success">Milestone Accomplishment</option>
                        </select>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Broadcast Content</label>
                        <textarea 
                          placeholder="Write key details here..." 
                          className="w-full bg-slate-950 border border-border/60 text-white rounded-lg p-3 text-sm min-h-[100px] focus:border-blue/60"
                          value={newAnn.content}
                          onChange={(e) => setNewAnn({...newAnn, content: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="rounded-full text-xs font-mono text-muted"
                        onClick={() => setShowAnnForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" variant="primary" className="rounded-full text-xs font-mono px-6">
                        Deploy Broadcast
                      </Button>
                    </div>
                  </form>
                </Card>
              )}

              <div className="space-y-4">
                {announcements.map((a, i) => (
                  <Card key={`${a.title}-${i}`} className="bg-card border-border/40 p-5 rounded-xl relative overflow-hidden">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h4 className="font-serif text-lg text-foreground font-light">{a.title}</h4>
                          <Badge variant="outline" className="border-blue/20 text-blue font-mono text-[9px] uppercase px-2 py-0.5">
                            {a.type}
                          </Badge>
                          <time className="text-[10px] font-mono text-muted-foreground">{a.date}</time>
                        </div>
                        <p className="text-sm text-muted font-light leading-relaxed max-w-4xl">{a.content}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full h-8 w-8 p-0 shrink-0"
                        onClick={() => handleDeleteAnn(a.title)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="font-serif text-xl font-light text-foreground">Featured Community Showcase</h3>
                <Button 
                  onClick={() => setShowProjForm(!showProjForm)}
                  variant="primary" 
                  className="rounded-full gap-1.5 font-mono text-xs px-5 py-2"
                >
                  <Plus className="h-4 w-4" /> {showProjForm ? "Cancel Form" : "Index New Project"}
                </Button>
              </div>

              {showProjForm && (
                <Card className="bg-[#161D26] border border-blue/20 p-6 rounded-2xl">
                  <form onSubmit={handleAddProj} className="space-y-4 text-sm">
                    <h4 className="font-serif text-lg text-foreground mb-4">Project Parameters</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Project Title</label>
                        <Input 
                          placeholder="e.g. AWS Study Buddy Portal" 
                          value={newProj.title}
                          onChange={(e) => setNewProj({...newProj, title: e.target.value})}
                          required
                          className="bg-slate-950 border-border/60 text-white rounded-lg focus:border-blue/60"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Category Type</label>
                        <select 
                          className="w-full bg-slate-950 border border-border/60 text-white rounded-lg px-3 py-2 text-sm focus:border-blue/60 focus:ring-0"
                          value={newProj.type}
                          onChange={(e) => setNewProj({...newProj, type: e.target.value as any})}
                        >
                          <option value="featured">Featured showcase</option>
                          <option value="open_source">Open Source</option>
                          <option value="community">Community Build</option>
                          <option value="hackathon">Hackathon Project</option>
                          <option value="research">Research Project</option>
                        </select>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Showcase Tags (comma separated)</label>
                        <Input 
                          placeholder="e.g. React, Lambda, DynamoDB" 
                          value={rawProjTags}
                          onChange={(e) => setRawProjTags(e.target.value)}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-mono text-muted uppercase">Project description summary</label>
                        <textarea 
                          placeholder="Details of AWS tech stack used, problem solved..." 
                          className="w-full bg-slate-950 border border-border/60 text-white rounded-lg p-3 text-sm min-h-[80px] focus:border-blue/60"
                          value={newProj.description}
                          onChange={(e) => setNewProj({...newProj, description: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Live URL</label>
                        <Input 
                          placeholder="https://..." 
                          value={newProj.link}
                          onChange={(e) => setNewProj({...newProj, link: e.target.value})}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-muted uppercase">Github Repository</label>
                        <Input 
                          placeholder="https://github.com/..." 
                          value={newProj.github}
                          onChange={(e) => setNewProj({...newProj, github: e.target.value})}
                          className="bg-slate-950 border-border/60 text-white rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="rounded-full text-xs font-mono text-muted"
                        onClick={() => setShowProjForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" variant="primary" className="rounded-full text-xs font-mono px-6">
                        Confirm Project Index
                      </Button>
                    </div>
                  </form>
                </Card>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <Card key={`${p.title}-${i}`} className="bg-card border-border/40 flex flex-col h-full rounded-xl overflow-hidden relative">
                    <div className="p-5 flex-1 space-y-3">
                      <div className="flex justify-between items-start gap-3">
                        <h4 className="font-serif text-lg text-foreground font-light">{p.title}</h4>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full h-8 w-8 p-0 shrink-0"
                          onClick={() => handleDeleteProj(p.title)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted font-light line-clamp-3 leading-relaxed">{p.description}</p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {p.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-blue/10 text-blue/90 bg-blue/5 text-[8px] font-mono rounded px-1.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardFooter className="px-5 py-4 bg-slate-950/40 border-t border-border/20 gap-3 text-xs font-mono">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue hover:underline flex items-center gap-1">
                          <ExternalLink className="h-3.5 w-3.5" /> Demo
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground flex items-center gap-1">
                          <Code2 className="h-3.5 w-3.5" /> Code
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-2xl">
              <h3 className="font-serif text-xl font-light text-foreground">Terminal Configurations</h3>
              
              <Card className="bg-card border-border/40 p-6 rounded-2xl space-y-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-bold text-orange">Reseed Database Cluster</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Reseeding will clean your current web session storage cache and overwrite it back with the default static JSON models defined in code.
                  </p>
                  <div className="pt-2">
                    <Button 
                      onClick={handleReset}
                      variant="outline" 
                      className="border-orange/20 text-orange hover:bg-orange/5 font-mono text-xs rounded-full px-6 py-2"
                    >
                      <RefreshCw className="h-4 w-4 gap-1.5" /> Force DB Reseed / Reset
                    </Button>
                  </div>
                </div>

                <Separator className="bg-border/20" />

                <div className="space-y-2">
                  <h4 className="font-mono text-sm font-bold text-blue">Color Protocol Diagnostics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-1">
                    <div className="p-3 bg-slate-950/60 rounded border border-border/40 flex justify-between items-center">
                      <span className="text-muted">Primary Blue Hex:</span>
                      <span className="text-blue font-bold">#42B5FF</span>
                    </div>
                    <div className="p-3 bg-slate-950/60 rounded border border-border/40 flex justify-between items-center">
                      <span className="text-muted">Complement Orange Hex:</span>
                      <span className="text-orange font-bold">#FF7E42</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

        </div>

        {/* Scrolling Action Logs Terminal */}
        <div className="mt-12 rounded-2xl border border-border/40 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="bg-[#161D26] px-4 py-2.5 border-b border-border/40 flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-blue" /> Live Session Terminal Logs
            </span>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
          </div>
          <div className="p-4 font-mono text-xs text-blue-light/80 h-36 overflow-y-auto space-y-1 bg-black/40">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-blue/60 font-bold">&gt;</span>
                <span>{log}</span>
              </div>
            ))}
            <div ref={logTerminalEndRef} />
          </div>
        </div>

      </div>
    </div>
  )
}
