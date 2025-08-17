"use client"

import { useState, useEffect } from "react"
import {
  X,
  Home,
  User,
  GraduationCap,
  FileText,
  Briefcase,
  Calendar,
  Settings,
  TrendingUp,
  Clock,
  MapPin,
  Palette,
  Bell,
  Monitor,
  Accessibility,
  Info,
  Download,
  Upload,
  Trash2,
  RotateCcw,
  AlertTriangle,
  Heart,
  Building2,
  CreditCard,
  Car,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Users,
  Award,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface TabletInterfaceProps {
  onClose: () => void
}

type TabletCategory = "personal" | "world" | "system"
type TabletApp =
  // Personal Management
  | "profile"
  | "bank"
  | "garage"
  | "properties"
  // World Interaction
  | "citizen-services"
  | "marketplace"
  | "messaging"
  // System & Knowledge
  | "academy-guide"
  | "settings"

export function TabletInterface({ onClose }: TabletInterfaceProps) {
  const [activeCategory, setActiveCategory] = useState<TabletCategory>("personal")
  const [activeApp, setActiveApp] = useState<TabletApp>("profile")
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    {
      id: "personal" as TabletCategory,
      label: "Management Personal",
      description: "Eu, ca Jucător",
      icon: User,
      apps: [
        { id: "profile" as TabletApp, label: "Profilul Meu", icon: User },
        { id: "bank" as TabletApp, label: "AnoBank", icon: CreditCard },
        { id: "garage" as TabletApp, label: "Garajul Meu", icon: Car },
        { id: "properties" as TabletApp, label: "Registrul Proprietăților", icon: Home },
      ],
    },
    {
      id: "world" as TabletCategory,
      label: "Interacțiune cu Lumea",
      description: "Eu și Ceilalți",
      icon: Users,
      apps: [
        { id: "citizen-services" as TabletApp, label: "Servicii Cetățenești", icon: Building2 },
        { id: "marketplace" as TabletApp, label: "Piața Ano", icon: ShoppingCart },
        { id: "messaging" as TabletApp, label: "Contacte & Mesagerie", icon: MessageCircle },
      ],
    },
    {
      id: "system" as TabletCategory,
      label: "Sistem & Cunoștințe",
      description: "Eu și Jocul",
      icon: BookOpen,
      apps: [
        { id: "academy-guide" as TabletApp, label: "Ghidul Academiei", icon: GraduationCap },
        { id: "settings" as TabletApp, label: "Setări", icon: Settings },
      ],
    },
  ]

  const currentCategory = categories.find((cat) => cat.id === activeCategory)
  const currentApp = currentCategory?.apps.find((app) => app.id === activeApp)

  const handleCategoryChange = (categoryId: TabletCategory) => {
    setActiveCategory(categoryId)
    const category = categories.find((cat) => cat.id === categoryId)
    if (category && category.apps.length > 0) {
      setActiveApp(category.apps[0].id)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div
        className={cn(
          "absolute inset-4 bg-card border border-border rounded-xl shadow-2xl glow-accent",
          isAnimating ? "tablet-enter" : "",
        )}
      >
        {/* Updated main tablet shell with consistent design tokens */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-white to-slate-50">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Ano Academy Tablet</h1>
            <div className="text-sm text-slate-600 mt-1">
              <span className="text-blue-600 font-medium">{currentCategory?.label}</span> / {currentApp?.label}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            <X className="h-5 w-5 mr-2" />
            <span className="text-xs">ESC</span>
          </Button>
        </div>

        <div className="flex h-[calc(100%-5rem)]">
          <div className="w-80 border-r border-slate-200 bg-slate-50">
            {/* Category Navigation */}
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Categorii</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        "w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        activeCategory === category.id
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-200 hover:text-slate-900",
                      )}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">{category.label}</div>
                        <div className="text-xs opacity-70">{category.description}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* App Navigation */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Aplicații</h3>
              <div className="space-y-1">
                {currentCategory?.apps.map((app) => {
                  const Icon = app.icon
                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveApp(app.id)}
                      className={cn(
                        "w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        activeApp === app.id
                          ? "bg-blue-100 text-blue-900 border border-blue-200"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                      )}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {app.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto bg-white">
            <div className="p-6">
              {/* Personal Management Apps */}
              {activeApp === "profile" && <ProfileContent />}
              {activeApp === "bank" && <BankContent />}
              {activeApp === "garage" && <GarageContent />}
              {activeApp === "properties" && <PropertiesContent />}

              {/* World Interaction Apps */}
              {activeApp === "citizen-services" && <CitizenServicesContent />}
              {activeApp === "marketplace" && <MarketplaceContent />}
              {activeApp === "messaging" && <MessagingContent />}

              {/* System & Knowledge Apps */}
              {activeApp === "academy-guide" && <AcademyGuideContent />}
              {activeApp === "settings" && <SettingsContent />}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-slate-50">
          <div className="text-xs text-slate-600">Ano Academy Tablet System v3.0.0</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400 bg-white">
              Aplică
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-600 hover:text-slate-900">
              Închide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfileContent() {
  const [activeProfileTab, setActiveProfileTab] = useState<"skills" | "academies" | "badges">("skills")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Profilul Meu</h2>
        <Badge variant="outline" className="text-xs">
          Dashboard Principal
        </Badge>
      </div>

      {/* Digital Identity Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Act de Identitate Digital</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <div className="w-24 h-32 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-slate-300">
              <User className="h-12 w-12 text-slate-400" />
              <div className="absolute bottom-1 right-1 text-xs text-slate-500">ID Photo</div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-slate-600">Nume Complet</Label>
                  <p className="font-semibold text-slate-900">John Anderson</p>
                </div>
                <div>
                  <Label className="text-slate-600">Vârsta</Label>
                  <p className="font-semibold text-slate-900">28 ani</p>
                </div>
                <div>
                  <Label className="text-slate-600">Cetățenie</Label>
                  <p className="font-semibold text-slate-900">San Andreas</p>
                </div>
                <div>
                  <Label className="text-slate-600">ID Cetățean</Label>
                  <p className="font-semibold text-slate-900">#SA-2024-1337</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-slate-600">Data Nașterii</Label>
                    <p className="text-slate-900">15 Martie 1996</p>
                  </div>
                  <div>
                    <Label className="text-slate-600">Status</Label>
                    <p className="text-slate-900">Cetățean Activ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="border-b border-slate-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveProfileTab("skills")}
            className={cn(
              "py-2 px-1 text-sm font-medium border-b-2 transition-colors",
              activeProfileTab === "skills"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-700",
            )}
          >
            Skill Tree Global
          </button>
          <button
            onClick={() => setActiveProfileTab("academies")}
            className={cn(
              "py-2 px-1 text-sm font-medium border-b-2 transition-colors",
              activeProfileTab === "academies"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-700",
            )}
          >
            Academii
          </button>
          <button
            onClick={() => setActiveProfileTab("badges")}
            className={cn(
              "py-2 px-1 text-sm font-medium border-b-2 transition-colors",
              activeProfileTab === "badges"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-700",
            )}
          >
            Portofel Badge-uri
          </button>
        </nav>
      </div>

      {activeProfileTab === "skills" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Puncte Skill Disponibile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <p className="text-slate-600 mb-4">Puncte de alocat în skill-uri</p>
                <Button size="sm" className="w-full">
                  Aloca Puncte
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Progres General</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 mb-4">Nivel 12</div>
                <Progress value={65} className="h-3 mb-2" />
                <p className="text-sm text-slate-600">2,150 / 3,300 XP până la nivelul următor</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Skill-uri Globale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Driving</span>
                      <span className="text-slate-900">Level 4 (75%)</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Communication</span>
                      <span className="text-slate-900">Level 3 (60%)</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Physical Fitness</span>
                      <span className="text-slate-900">Level 2 (40%)</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Technical Skills</span>
                      <span className="text-slate-900">Level 1 (25%)</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Leadership</span>
                      <span className="text-slate-900">Level 1 (15%)</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Creativity</span>
                      <span className="text-slate-900">Level 2 (35%)</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeProfileTab === "academies" && (
        <div className="space-y-6">
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Academia EMS</h3>
                      <p className="text-slate-600">Servicii Medicale de Urgență</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900 mb-1">Nivel 3</div>
                    <Progress value={75} className="w-24 h-2 mb-2" />
                    <p className="text-xs text-slate-600">2,250 / 3,000 XP</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Recompense Deblocate:</span>
                    <div className="flex gap-1">
                      <Badge variant="secondary" className="text-xs">
                        Paramedic Badge
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Life Saver
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Academia LSPD</h3>
                      <p className="text-slate-600">Los Santos Police Department</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900 mb-1">Nivel 1</div>
                    <Progress value={30} className="w-24 h-2 mb-2" />
                    <p className="text-xs text-slate-600">450 / 1,500 XP</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Status:</span>
                    <Badge variant="outline" className="text-xs">
                      În Progres
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeProfileTab === "badges" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">First Responder</h4>
              <p className="text-xs text-slate-600 mb-2">Primul apel EMS completat</p>
              <p className="text-xs text-slate-500">15 Ian 2024</p>
            </Card>

            <Card className="p-4 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Life Saver</h4>
              <p className="text-xs text-slate-600 mb-2">10 vieți salvate</p>
              <p className="text-xs text-slate-500">22 Ian 2024</p>
            </Card>

            <Card className="p-4 text-center border-2 border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-slate-400" />
              </div>
              <h4 className="font-medium text-slate-500 text-sm mb-1">Locked Badge</h4>
              <p className="text-xs text-slate-400">Completează 50 de apeluri</p>
            </Card>

            <Card className="p-4 text-center border-2 border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-slate-400" />
              </div>
              <h4 className="font-medium text-slate-500 text-sm mb-1">Locked Badge</h4>
              <p className="text-xs text-slate-400">Atinge nivelul 5</p>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

function BankContent() {
  const [activeTransaction, setActiveTransaction] = useState<string | null>(null)
  const [showTransferForm, setShowTransferForm] = useState(false)
  const [showBillPayment, setShowBillPayment] = useState(false)

  const transactions = [
    { id: "1", type: "income", description: "Salariu EMS", amount: 1200, date: "Azi, 14:30", category: "Salariu" },
    { id: "2", type: "expense", description: "Taxă Proprietate", amount: -450, date: "Ieri, 09:15", category: "Taxe" },
    {
      id: "3",
      type: "expense",
      description: "Asigurare Auto",
      amount: -120,
      date: "Ieri, 08:00",
      category: "Asigurări",
    },
    {
      id: "4",
      type: "income",
      description: "Transfer de la Alex M.",
      amount: 500,
      date: "2 zile în urmă",
      category: "Transfer",
    },
    {
      id: "5",
      type: "expense",
      description: "Amendă Parcare",
      amount: -75,
      date: "3 zile în urmă",
      category: "Amenzi",
    },
  ]

  const pendingBills = [
    { id: "1", type: "property", description: "Taxă Anuală Apartament", amount: 2400, dueDate: "30 Ian 2024" },
    { id: "2", type: "vehicle", description: "Asigurare Vapid Dominator", amount: 180, dueDate: "5 Feb 2024" },
    { id: "3", type: "fine", description: "Amendă Viteză", amount: 150, dueDate: "Scadent" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">AnoBank</h2>
        <Badge variant="outline" className="text-xs">
          Aplicația Bancară
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">Sold Curent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">$24,750</div>
            <p className="text-slate-600 mb-2">Cont Principal</p>
            <div className="text-sm text-slate-500">
              <div className="flex justify-between">
                <span>Disponibil:</span>
                <span>$24,750</span>
              </div>
              <div className="flex justify-between">
                <span>Blocat:</span>
                <span>$0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">Economii</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">$8,200</div>
            <p className="text-slate-600 mb-2">Cont de Economii</p>
            <div className="text-sm text-slate-500">
              <div className="flex justify-between">
                <span>Dobândă anuală:</span>
                <span>2.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Câștig lunar:</span>
                <span>+$17</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-900">IBAN</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-mono text-slate-900 mb-2 p-2 bg-slate-100 rounded">
              SA29 ANOB 1337 2024 0001
            </div>
            <p className="text-slate-600 mb-3">Pentru transferuri</p>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              Copiază IBAN
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-slate-900">Acțiuni Rapide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col" onClick={() => setShowTransferForm(true)}>
              <Upload className="h-6 w-6 mb-2" />
              Transfer Bani
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent" onClick={() => setShowBillPayment(true)}>
              <FileText className="h-6 w-6 mb-2" />
              Plată Facturi
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <TrendingUp className="h-6 w-6 mb-2" />
              Investiții
              <span className="text-xs text-slate-500">În curând</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Clock className="h-6 w-6 mb-2" />
              Istoric Complet
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-slate-900">Tranzacții Recente</CardTitle>
            <Button variant="ghost" size="sm">
              Vezi Toate (50)
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
                onClick={() => setActiveTransaction(activeTransaction === transaction.id ? null : transaction.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      transaction.type === "income" ? "bg-green-100" : "bg-red-100",
                    )}
                  >
                    {transaction.type === "income" ? (
                      <Upload className="h-4 w-4 text-green-600" />
                    ) : (
                      <Download className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{transaction.description}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>{transaction.date}</span>
                      <span>•</span>
                      <span>{transaction.category}</span>
                    </div>
                  </div>
                </div>
                <div className={cn("font-semibold", transaction.type === "income" ? "text-green-600" : "text-red-600")}>
                  {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {showTransferForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Transfer Bani</h3>
              <Button variant="ghost" onClick={() => setShowTransferForm(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form className="space-y-4">
              <div>
                <Label className="text-slate-700">Destinatar</Label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="IBAN sau Citizen ID"
                />
              </div>
              <div>
                <Label className="text-slate-700">Suma</Label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label className="text-slate-700">Descriere (opțional)</Label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Motivul transferului"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  Trimite
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowTransferForm(false)}>
                  Anulează
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      {showBillPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Plată Facturi</h3>
              <Button variant="ghost" onClick={() => setShowBillPayment(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {pendingBills.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900">{bill.description}</h4>
                    <p className="text-sm text-slate-600">Scadență: {bill.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">${bill.amount}</div>
                    <Button size="sm" className="mt-2">
                      Plătește
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

function GarageContent() {
  const [showTransferModal, setShowTransferModal] = useState<string | null>(null)

  const vehicles = [
    {
      id: "1",
      model: "Vapid Dominator",
      plate: "SPEED01",
      status: "garage",
      location: "Garaj Personal",
      condition: "Excelentă",
      fuel: 85,
      mileage: "12,450 km",
      insurance: "Activă",
      impoundFee: 0,
    },
    {
      id: "2",
      model: "Pegassi Zentorno",
      plate: "FAST99",
      status: "impounded",
      location: "Depozit LSPD",
      condition: "Bună",
      fuel: 45,
      mileage: "8,230 km",
      insurance: "Activă",
      impoundFee: 500,
    },
    {
      id: "3",
      model: "Bravado Buffalo",
      plate: "WORK01",
      status: "street",
      location: "Parking Mall",
      condition: "Satisfăcătoare",
      fuel: 60,
      mileage: "25,100 km",
      insurance: "Expirată",
      impoundFee: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Garajul Meu</h2>
        <Badge variant="outline" className="text-xs">
          Management Vehicule
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">{vehicles.length}</div>
            <p className="text-sm text-slate-600">Total Vehicule</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {vehicles.filter((v) => v.status === "garage").length}
            </div>
            <p className="text-sm text-slate-600">În Garaj</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {vehicles.filter((v) => v.status === "impounded").length}
            </div>
            <p className="text-sm text-slate-600">Confiscate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {vehicles.filter((v) => v.status === "street").length}
            </div>
            <p className="text-sm text-slate-600">Pe Stradă</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <Car className="h-6 w-6 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{vehicle.model}</h3>
                      <Badge
                        variant={
                          vehicle.status === "garage"
                            ? "secondary"
                            : vehicle.status === "impounded"
                              ? "destructive"
                              : "outline"
                        }
                      >
                        {vehicle.status === "garage"
                          ? "În Garaj"
                          : vehicle.status === "impounded"
                            ? "Confiscat"
                            : "Pe Stradă"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600">Plăcuță:</span>
                        <p className="font-medium text-slate-900">{vehicle.plate}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Locație:</span>
                        <p className="font-medium text-slate-900">{vehicle.location}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Stare:</span>
                        <p className="font-medium text-slate-900">{vehicle.condition}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Combustibil:</span>
                        <p className="font-medium text-slate-900">{vehicle.fuel}%</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Kilometraj:</span>
                        <p className="font-medium text-slate-900">{vehicle.mileage}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Asigurare:</span>
                        <p
                          className={cn(
                            "font-medium",
                            vehicle.insurance === "Activă" ? "text-green-600" : "text-red-600",
                          )}
                        >
                          {vehicle.insurance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  {vehicle.status === "garage" && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-1" />
                        Localizează
                      </Button>
                      <Button size="sm">Scoate</Button>
                    </div>
                  )}
                  {vehicle.status === "impounded" && (
                    <div className="space-y-2">
                      <div className="text-red-600 font-semibold">Taxă: ${vehicle.impoundFee}</div>
                      <Button size="sm" variant="outline">
                        Plătește & Recuperează
                      </Button>
                    </div>
                  )}
                  {vehicle.status === "street" && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-1" />
                        GPS
                      </Button>
                      <Button size="sm">Cheamă</Button>
                    </div>
                  )}
                  <div className="pt-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600"
                      onClick={() => setShowTransferModal(vehicle.id)}
                    >
                      Transfer Proprietate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showTransferModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Transfer Proprietate</h3>
              <Button variant="ghost" onClick={() => setShowTransferModal(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form className="space-y-4">
              <div>
                <Label className="text-slate-700">Cumpărător (Citizen ID)</Label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ex: SA-2024-5678"
                />
              </div>
              <div>
                <Label className="text-slate-700">Preț de Vânzare</Label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  Transferul necesită confirmarea ambelor părți. Cumpărătorul va primi o notificare.
                </p>
              </div>
              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  Inițiază Transfer
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowTransferModal(null)}>
                  Anulează
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}

function PropertiesContent() {
  const [showAccessModal, setShowAccessModal] = useState<string | null>(null)
  const [showFurnitureStore, setShowFurnitureStore] = useState(false)

  const properties = [
    {
      id: "1",
      name: "Apartament Luxury",
      address: "Eclipse Towers, Apt 31",
      type: "Apartament",
      value: 450000,
      taxStatus: "paid",
      nextTaxDue: "15 Dec 2024",
      taxAmount: 2400,
      accessList: ["Maria Popescu", "Alex Ionescu"],
      amenities: ["Parcare", "Piscină", "Sală Fitness", "Concierge"],
    },
    {
      id: "2",
      name: "Casă Familială",
      address: "Vinewood Hills, 1247",
      type: "Casă",
      value: 680000,
      taxStatus: "due",
      nextTaxDue: "Scadent",
      taxAmount: 3600,
      accessList: ["Ana Georgescu"],
      amenities: ["Grădină", "Garaj Dublu", "Piscină", "Terasă"],
    },
  ]

  const furniturePackages = [
    { id: "1", name: "Pachet Living Modern", price: 2500, items: "Canapea, Masă, TV, Decorațiuni" },
    { id: "2", name: "Pachet Dormitor Luxury", price: 1800, items: "Pat, Dulap, Noptiere, Oglindă" },
    { id: "3", name: "Pachet Bucătărie Completă", price: 3200, items: "Mobilier, Electrocasnice, Ustensile" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Registrul Proprietăților</h2>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-xs">
            Management Imobiliar
          </Badge>
          <Button size="sm" onClick={() => setShowFurnitureStore(true)}>
            <Home className="h-4 w-4 mr-1" />
            Magazin Mobilier
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">{properties.length}</div>
            <p className="text-sm text-slate-600">Proprietăți Deținute</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {properties.filter((p) => p.taxStatus === "paid").length}
            </div>
            <p className="text-sm text-slate-600">Taxe Plătite</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {properties.filter((p) => p.taxStatus === "due").length}
            </div>
            <p className="text-sm text-slate-600">Taxe Scadente</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              ${properties.reduce((sum, p) => sum + p.value, 0).toLocaleString()}
            </div>
            <p className="text-sm text-slate-600">Valoare Totală</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {properties.map((property) => (
          <Card key={property.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{property.name}</h3>
                      <Badge variant="outline">{property.type}</Badge>
                      <Badge variant={property.taxStatus === "paid" ? "secondary" : "destructive"}>
                        {property.taxStatus === "paid" ? "Taxe Plătite" : "Taxe Scadente"}
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-3">{property.address}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-slate-600">Valoare Estimată:</span>
                        <p className="font-medium text-slate-900">${property.value.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-slate-600">Următoarea Taxă:</span>
                        <p
                          className={cn(
                            "font-medium",
                            property.taxStatus === "due" ? "text-red-600" : "text-slate-900",
                          )}
                        >
                          {property.nextTaxDue}
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-600">Suma Taxă:</span>
                        <p className="font-medium text-slate-900">${property.taxAmount}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-slate-600 text-sm">Facilități:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {property.amenities.map((amenity, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-600 text-sm">Acces Permis ({property.accessList.length}):</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {property.accessList.map((person, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {person}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  {property.taxStatus === "due" && (
                    <Button size="sm" variant="destructive" className="mb-2">
                      Plătește Taxele (${property.taxAmount})
                    </Button>
                  )}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => setShowAccessModal(property.id)}>
                      Gestionează Acces
                    </Button>
                    <Button size="sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Vizitează
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showAccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Gestionează Acces</h3>
              <Button variant="ghost" onClick={() => setShowAccessModal(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-slate-700">Adaugă Persoană Nouă</Label>
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Citizen ID sau Nume"
                  />
                  <Button>Adaugă</Button>
                </div>
              </div>

              <div>
                <Label className="text-slate-700">Persoane cu Acces</Label>
                <div className="space-y-2 mt-2">
                  {properties
                    .find((p) => p.id === showAccessModal)
                    ?.accessList.map((person, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-slate-900">{person}</span>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {showFurnitureStore && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Magazin Mobilier AnoIKEA</h3>
              <Button variant="ghost" onClick={() => setShowFurnitureStore(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-4">
              {furniturePackages.map((pkg) => (
                <div key={pkg.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-slate-900">{pkg.name}</h4>
                    <p className="text-sm text-slate-600">{pkg.items}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900 mb-2">${pkg.price}</div>
                    <Button size="sm">Comandă</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                Mobilierul va fi livrat la proprietatea selectată în 24-48 ore în joc.
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

function MarketplaceContent() {
  const [activeCategory, setActiveCategory] = useState<"vehicles" | "properties" | "items" | "services">("vehicles")
  const [showCreateListing, setShowCreateListing] = useState(false)
  const [selectedListing, setSelectedListing] = useState<string | null>(null)

  const categories = [
    { id: "vehicles" as const, label: "Vehicule", icon: Car },
    { id: "properties" as const, label: "Proprietăți", icon: Home },
    { id: "items" as const, label: "Diverse", icon: ShoppingCart },
    { id: "services" as const, label: "Servicii", icon: Users },
  ]

  const listings = {
    vehicles: [
      {
        id: "v1",
        title: "Vapid Dominator GT",
        price: 85000,
        seller: "Alex M.",
        location: "Los Santos",
        description: "Mașină în stare perfectă, modificări complete, anvelope noi.",
        images: 3,
        posted: "2 ore în urmă",
        condition: "Excelentă",
      },
      {
        id: "v2",
        title: "Pegassi Zentorno",
        price: 120000,
        seller: "Maria P.",
        location: "Vinewood",
        description: "Supercar de lux, garaj privat, service complet la zi.",
        images: 5,
        posted: "1 zi în urmă",
        condition: "Foarte bună",
      },
    ],
    properties: [
      {
        id: "p1",
        title: "Apartament Eclipse Towers",
        price: 450000,
        seller: "John D.",
        location: "Downtown LS",
        description: "Apartament luxury cu vedere la ocean, mobilat complet.",
        images: 8,
        posted: "3 ore în urmă",
        condition: "Nou",
      },
    ],
    items: [
      {
        id: "i1",
        title: "Set Scule Profesionale",
        price: 2500,
        seller: "Mechanic Pro",
        location: "Sandy Shores",
        description: "Set complet de scule pentru mecanici, calitate premium.",
        images: 2,
        posted: "5 ore în urmă",
        condition: "Bună",
      },
    ],
    services: [
      {
        id: "s1",
        title: "Taximetrist Privat",
        price: 50,
        seller: "Taxi Express",
        location: "Toată zona LS",
        description: "Servicii de transport rapid și sigur, disponibil 24/7.",
        images: 1,
        posted: "1 oră în urmă",
        condition: "Activ",
      },
      {
        id: "s2",
        title: "Avocat Specializat",
        price: 200,
        seller: "Law Firm LS",
        location: "Downtown",
        description: "Consultanță juridică, reprezentare în instanță, cazuri penale.",
        images: 0,
        posted: "4 ore în urmă",
        condition: "Disponibil",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Piața Ano</h2>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-xs">
            Marketplace Online
          </Badge>
          <Button onClick={() => setShowCreateListing(true)}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Creează Anunț
          </Button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
              activeCategory === category.id
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            <category.icon className="h-4 w-4 mr-2" />
            {category.label}
          </button>
        ))}
      </div>

      {/* Listings Grid */}
      <div className="grid gap-4">
        {listings[activeCategory].map((listing) => (
          <Card key={listing.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-20 h-16 bg-slate-200 rounded-lg flex items-center justify-center">
                    {activeCategory === "vehicles" && <Car className="h-8 w-8 text-slate-400" />}
                    {activeCategory === "properties" && <Home className="h-8 w-8 text-slate-400" />}
                    {activeCategory === "items" && <ShoppingCart className="h-8 w-8 text-slate-400" />}
                    {activeCategory === "services" && <Users className="h-8 w-8 text-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">{listing.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {listing.condition}
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-3 line-clamp-2">{listing.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>📍 {listing.location}</span>
                      <span>👤 {listing.seller}</span>
                      <span>🕒 {listing.posted}</span>
                      {listing.images > 0 && <span>📷 {listing.images} poze</span>}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    ${listing.price.toLocaleString()}
                    {activeCategory === "services" && <span className="text-sm text-slate-500">/oră</span>}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Contactează
                    </Button>
                    <Button size="sm" onClick={() => setSelectedListing(listing.id)}>
                      Vezi Detalii
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Listing Modal */}
      {showCreateListing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Creează Anunț Nou</h3>
              <Button variant="ghost" onClick={() => setShowCreateListing(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <form className="space-y-4">
              <div>
                <Label className="text-slate-700">Categorie</Label>
                <Select defaultValue="vehicles">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vehicles">Vehicule</SelectItem>
                    <SelectItem value="properties">Proprietăți</SelectItem>
                    <SelectItem value="items">Diverse</SelectItem>
                    <SelectItem value="services">Servicii</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-slate-700">Titlu Anunț</Label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ex: Vapid Dominator GT"
                  />
                </div>
                <div>
                  <Label className="text-slate-700">Preț ($)</Label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <Label className="text-slate-700">Locație</Label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ex: Los Santos"
                />
              </div>

              <div>
                <Label className="text-slate-700">Descriere Detaliată</Label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descrie produsul/serviciul în detaliu..."
                />
              </div>

              <div>
                <Label className="text-slate-700">Starea</Label>
                <Select defaultValue="good">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">Nou</SelectItem>
                    <SelectItem value="excellent">Excelentă</SelectItem>
                    <SelectItem value="very-good">Foarte bună</SelectItem>
                    <SelectItem value="good">Bună</SelectItem>
                    <SelectItem value="fair">Satisfăcătoare</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1">
                  Publică Anunțul
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowCreateListing(false)}>
                  Anulează
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      {/* Listing Details Modal */}
      {selectedListing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-3xl mx-4 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">Detalii Anunț</h3>
              <Button variant="ghost" onClick={() => setSelectedListing(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-24 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Car className="h-16 w-16 text-slate-400" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Vapid Dominator GT</h4>
                <div className="text-3xl font-bold text-green-600">$85,000</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3">Informații</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Vânzător:</span>
                      <span className="text-slate-900">Alex M.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Locație:</span>
                      <span className="text-slate-900">Los Santos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Starea:</span>
                      <span className="text-slate-900">Excelentă</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Publicat:</span>
                      <span className="text-slate-900">2 ore în urmă</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3">Descriere</h5>
                  <p className="text-slate-600 text-sm">
                    Mașină în stare perfectă, modificări complete, anvelope noi. Service la zi, fără accidente. Ideal
                    pentru curse sau uz personal.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Trimite Mesaj
                </Button>
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Salvează
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

function MessagingContent() {
  const [activeTab, setActiveTab] = useState<"contacts" | "messages" | "social">("messages")
  const [selectedContact, setSelectedContact] = useState<string | null>("contact1")
  const [newMessage, setNewMessage] = useState("")

  const contacts = [
    { id: "contact1", name: "Alex Ionescu", phone: "555-0123", status: "online", avatar: "A" },
    { id: "contact2", name: "Maria Popescu", phone: "555-0456", status: "offline", avatar: "M" },
    { id: "contact3", name: "John Smith", phone: "555-0789", status: "busy", avatar: "J" },
    { id: "contact4", name: "Ana Georgescu", phone: "555-0321", status: "online", avatar: "A" },
  ]

  const conversations = {
    contact1: [
      { id: 1, sender: "Alex Ionescu", message: "Salut! Cum merge cu noua mașină?", time: "14:30", isMe: false },
      { id: 2, sender: "Eu", message: "Foarte bine! Mulțumesc pentru recomandare.", time: "14:32", isMe: true },
      {
        id: 3,
        sender: "Alex Ionescu",
        message: "Cu plăcere! Dacă ai nevoie de ceva, să îmi spui.",
        time: "14:35",
        isMe: false,
      },
    ],
    contact2: [
      {
        id: 1,
        sender: "Maria Popescu",
        message: "Bună! Ești disponibil pentru un apel EMS?",
        time: "13:15",
        isMe: false,
      },
      { id: 2, sender: "Eu", message: "Da, sunt în serviciu. Care e locația?", time: "13:16", isMe: true },
    ],
  }

  const socialPosts = [
    {
      id: 1,
      author: "Alex M.",
      content: "Zi frumoasă în Los Santos! Perfect pentru o plimbare cu mașina 🚗",
      time: "2 ore în urmă",
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      author: "Maria P.",
      content: "Căutăm paramedici noi la EMS! Aplicați pe tableta guvernamentală.",
      time: "4 ore în urmă",
      likes: 8,
      comments: 1,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Contacte & Mesagerie</h2>
        <Badge variant="outline" className="text-xs">
          Comunicare
        </Badge>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab("messages")}
          className={cn(
            "flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === "messages" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
          )}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Mesaje SMS
        </button>
        <button
          onClick={() => setActiveTab("contacts")}
          className={cn(
            "flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === "contacts" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
          )}
        >
          <Users className="h-4 w-4 mr-2" />
          Agenda
        </button>
        <button
          onClick={() => setActiveTab("social")}
          className={cn(
            "flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === "social" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
          )}
        >
          <Star className="h-4 w-4 mr-2" />
          LifeInvader
          <Badge variant="secondary" className="ml-2 text-xs">
            Curând
          </Badge>
        </button>
      </div>

      {activeTab === "messages" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
          {/* Contacts List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-slate-900">Conversații</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {contacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => setSelectedContact(contact.id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 text-left hover:bg-slate-50 transition-colors",
                      selectedContact === contact.id ? "bg-blue-50 border-r-2 border-blue-500" : "",
                    )}
                  >
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-slate-700">{contact.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-slate-900">{contact.name}</h4>
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full",
                            contact.status === "online"
                              ? "bg-green-500"
                              : contact.status === "busy"
                                ? "bg-yellow-500"
                                : "bg-slate-300",
                          )}
                        />
                      </div>
                      <p className="text-sm text-slate-600">{contact.phone}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            {selectedContact ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-slate-700">
                        {contacts.find((c) => c.id === selectedContact)?.avatar}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">
                        {contacts.find((c) => c.id === selectedContact)?.name}
                      </CardTitle>
                      <p className="text-sm text-slate-600">{contacts.find((c) => c.id === selectedContact)?.phone}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex flex-col h-64">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {(conversations[selectedContact as keyof typeof conversations] || []).map((msg) => (
                      <div key={msg.id} className={cn("flex", msg.isMe ? "justify-end" : "justify-start")}>
                        <div
                          className={cn(
                            "max-w-xs px-3 py-2 rounded-lg text-sm",
                            msg.isMe ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-900",
                          )}
                        >
                          <p>{msg.message}</p>
                          <p className={cn("text-xs mt-1", msg.isMe ? "text-blue-100" : "text-slate-500")}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Scrie un mesaj..."
                    />
                    <Button>Trimite</Button>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Selectează o conversație</h3>
                <p className="text-slate-600">Alege un contact pentru a începe să trimiți mesaje.</p>
              </CardContent>
            )}
          </Card>
        </div>
      )}

      {activeTab === "contacts" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Agenda de Contacte</h3>
            <Button size="sm">
              <Users className="h-4 w-4 mr-1" />
              Adaugă Contact
            </Button>
          </div>

          <div className="grid gap-4">
            {contacts.map((contact) => (
              <Card key={contact.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-slate-700">{contact.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{contact.name}</h4>
                        <p className="text-slate-600">{contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          contact.status === "online"
                            ? "bg-green-100 text-green-800"
                            : contact.status === "busy"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-slate-100 text-slate-800",
                        )}
                      >
                        {contact.status === "online" ? "Online" : contact.status === "busy" ? "Ocupat" : "Offline"}
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Mesaj
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "social" && (
        <div className="space-y-6">
          <Card className="p-6 text-center">
            <Star className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">LifeInvader Social Network</h3>
            <p className="text-slate-600 mb-4">
              Rețeaua socială LifeInvader va fi disponibilă în curând. Vei putea posta statusuri, fotografii și să
              interacționezi cu alți jucători.
            </p>

            <div className="space-y-4 mt-6">
              <h4 className="font-semibold text-slate-900">Preview - Postări Recente</h4>
              {socialPosts.map((post) => (
                <div key={post.id} className="text-left p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">{post.author[0]}</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">{post.author}</h5>
                      <p className="text-xs text-slate-500">{post.time}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-3">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>❤️ {post.likes} aprecieri</span>
                    <span>💬 {post.comments} comentarii</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

function AcademyGuideContent() {
  const [activeSection, setActiveSection] = useState("tutorials")
  const [selectedTutorial, setSelectedTutorial] = useState(null)
  const [tutorialProgress, setTutorialProgress] = useState({
    basics: 100,
    jobs: 75,
    laws: 50,
    roleplay: 25,
    advanced: 0,
  })

  const tutorials = [
    {
      id: "basics",
      title: "Noțiuni de Bază",
      description: "Învață fundamentele serverului",
      duration: "15 min",
      difficulty: "Începător",
      modules: [
        "Crearea personajului",
        "Interfața de joc",
        "Comenzi esențiale",
        "Sistemul de inventar",
        "Interacțiunea cu NPC-uri",
      ],
    },
    {
      id: "jobs",
      title: "Sistemul de Joburi",
      description: "Ghid complet pentru cariere",
      duration: "25 min",
      difficulty: "Intermediar",
      modules: [
        "Alegerea unei cariere",
        "Procesul de aplicare",
        "Progresul în job",
        "Beneficii și recompense",
        "Schimbarea jobului",
      ],
    },
    {
      id: "laws",
      title: "Codul Penal",
      description: "Legile statului San Andreas",
      duration: "30 min",
      difficulty: "Intermediar",
      modules: [
        "Infracțiuni minore",
        "Infracțiuni grave",
        "Proceduri legale",
        "Drepturi și obligații",
        "Sistemul judiciar",
      ],
    },
    {
      id: "roleplay",
      title: "Ghid Roleplay",
      description: "Tehnici pentru RP de calitate",
      duration: "20 min",
      difficulty: "Avansat",
      modules: [
        "Dezvoltarea personajului",
        "Interacțiuni realiste",
        "Gestionarea conflictelor",
        "Scenarii complexe",
        "Eticheta RP",
      ],
    },
    {
      id: "advanced",
      title: "Sisteme Avansate",
      description: "Funcții complexe ale serverului",
      duration: "35 min",
      difficulty: "Expert",
      modules: [
        "Sistemul economic",
        "Proprietăți și investiții",
        "Organizații și facțiuni",
        "Evenimente speciale",
        "Modificări și actualizări",
      ],
    },
  ]

  const faqItems = [
    {
      question: "Cum îmi aleg primul job?",
      answer:
        "Vizitează Centrul de Joburi din tabletă și explorează opțiunile disponibile. Recomandăm să începi cu joburi civile pentru a te familiariza cu sistemele.",
    },
    {
      question: "Ce fac dacă am probleme tehnice?",
      answer: "Folosește comanda /report în joc sau contactează staff-ul prin sistemul de tichete din Discord.",
    },
    {
      question: "Cum pot câștiga bani rapid?",
      answer:
        "Concentrează-te pe jobul tău principal, completează quest-urile zilnice și participă la evenimente speciale organizate de staff.",
    },
    {
      question: "Pot schimba jobul oricând?",
      answer:
        "Da, dar există o perioadă de cooldown de 24 de ore între schimbări. Unele joburi whitelisted necesită aplicare.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Ghidul Academiei</h2>
        <Badge variant="outline" className="text-xs">
          Baza de Cunoștințe
        </Badge>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveSection("tutorials")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeSection === "tutorials" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Tutoriale Interactive
        </button>
        <button
          onClick={() => setActiveSection("faq")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeSection === "faq" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Întrebări Frecvente
        </button>
        <button
          onClick={() => setActiveSection("resources")}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeSection === "resources" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Resurse
        </button>
      </div>

      {/* Tutorials Section */}
      {activeSection === "tutorials" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-slate-900">{tutorial.title}</CardTitle>
                      <CardDescription className="text-slate-600">{tutorial.description}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        tutorial.difficulty === "Începător"
                          ? "default"
                          : tutorial.difficulty === "Intermediar"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Durată: {tutorial.duration}</span>
                      <span>{tutorial.modules.length} module</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">Progres</span>
                        <span className="text-slate-600">{tutorialProgress[tutorial.id]}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${tutorialProgress[tutorial.id]}%` }}
                        />
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      variant={tutorialProgress[tutorial.id] === 100 ? "outline" : "default"}
                      onClick={() => setSelectedTutorial(tutorial)}
                    >
                      {tutorialProgress[tutorial.id] === 100
                        ? "Revizuiește"
                        : tutorialProgress[tutorial.id] > 0
                          ? "Continuă"
                          : "Începe"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {activeSection === "faq" && (
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Resources Section */}
      {activeSection === "resources" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Harta Interactivă</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Explorează toate locațiile importante</p>
              <Button className="w-full">Deschide Harta</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Codul Penal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Legile complete ale statului</p>
              <Button variant="outline" className="w-full bg-transparent">
                Consultă Legile
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Ghid Roleplay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Sfaturi pentru RP de calitate</p>
              <Button variant="outline" className="w-full bg-transparent">
                Citește Ghidul
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Comunitatea</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Discord, forum și social media</p>
              <Button variant="outline" className="w-full bg-transparent">
                Alătură-te
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tutorial Modal */}
      {selectedTutorial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-slate-900">{selectedTutorial.title}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setSelectedTutorial(null)}>
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-600">{selectedTutorial.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Module incluse:</h4>
                  <ul className="space-y-1">
                    {selectedTutorial.modules.map((module, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">Începe Tutorialul</Button>
                  <Button variant="outline" onClick={() => setSelectedTutorial(null)}>
                    Anulează
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

function CitizenServicesContent() {
  const [activeService, setActiveService] = useState<string>("careers")
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null)
  const [showComplaintForm, setShowComplaintForm] = useState(false)
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  const services = [
    { id: "careers", label: "Cariere Disponibile", icon: Briefcase },
    { id: "complaints", label: "Reclamații", icon: AlertTriangle },
    { id: "feedback", label: "Feedback Pozitiv", icon: Heart },
    { id: "applications", label: "Aplicațiile Mele", icon: FileText },
  ]

  const availablePositions = {
    lspd: {
      id: "lspd",
      name: "Los Santos Police Department",
      department: "LSPD",
      description: "Menține ordinea și siguranța în Los Santos",
      requirements: {
        academy: "Licențiat al Academiei de Poliție",
        age: 21,
        cleanRecord: true,
      },
      status: "eligible",
      icon: "👮",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    ems: {
      id: "ems",
      name: "Serviciul Medical de Urgență",
      department: "EMS",
      description: "Salvează vieți și oferă îngrijiri medicale de urgență",
      requirements: {
        academy: "Licențiat al Academiei Medicale",
        age: 18,
        cleanRecord: true,
      },
      status: "applied",
      icon: "🚑",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    mechanic: {
      id: "mechanic",
      name: "Serviciul de Mecanică",
      department: "Mechanic",
      description: "Repară și întreține vehiculele din oraș",
      requirements: {
        academy: "Licențiat al Academiei de Mecanică",
        age: 18,
        cleanRecord: false,
      },
      status: "not_eligible",
      icon: "🔧",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  }

  const myApplications = [
    {
      id: "ems-001",
      position: "EMS Paramedic",
      department: "EMS",
      status: "interview_scheduled",
      appliedDate: "2024-01-15",
      interviewDate: "2024-01-20 14:00",
      notes: "Interviu programat cu Dr. Johnson",
    },
    {
      id: "lspd-002",
      position: "Police Officer",
      department: "LSPD",
      status: "under_review",
      appliedDate: "2024-01-10",
      notes: "Aplicația este în curs de evaluare",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Portal AnoGov</h2>
        <p className="text-slate-600">Servicii cetățenești digitalizate pentru o experiență completă</p>
      </div>

      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg mb-6">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveService(service.id)}
            className={cn(
              "flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
              activeService === service.id
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            <service.icon className="h-4 w-4 mr-2" />
            {service.label}
          </button>
        ))}
      </div>

      {activeService === "careers" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Cariere Disponibile</h3>
            <div className="text-sm text-slate-600">
              {Object.values(availablePositions).filter((p) => p.status === "eligible").length} posturi disponibile
            </div>
          </div>

          <div className="grid gap-4">
            {Object.values(availablePositions).map((position) => (
              <Card key={position.id} className={cn("p-6", position.bgColor, position.borderColor)}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{position.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{position.name}</h4>
                      <p className="text-slate-600 mb-3">{position.description}</p>

                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium text-slate-700">Cerințe:</span>
                          <ul className="mt-1 space-y-1 text-slate-600">
                            <li>• {position.requirements.academy}</li>
                            <li>• Vârsta minimă: {position.requirements.age} ani</li>
                            <li>
                              •{" "}
                              {position.requirements.cleanRecord
                                ? "Cazier curat obligatoriu"
                                : "Cazier curat nu este obligatoriu"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    {position.status === "eligible" && (
                      <Button
                        onClick={() => setSelectedApplication(position.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Aplică Acum
                      </Button>
                    )}
                    {position.status === "applied" && (
                      <div className="text-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-2">
                          Aplicat
                        </div>
                        <div className="text-xs text-slate-600">În așteptare</div>
                      </div>
                    )}
                    {position.status === "not_eligible" && (
                      <div className="text-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-2">
                          Nu îndeplinești cerințele
                        </div>
                        <div className="text-xs text-slate-600">Completează academia</div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeService === "complaints" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Sistemul de Reclamații</h3>
            <Button onClick={() => setShowComplaintForm(true)} className="bg-red-600 hover:bg-red-700 text-white">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Depune Reclamație
            </Button>
          </div>

          {!showComplaintForm ? (
            <Card className="p-6">
              <div className="text-center py-8">
                <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Integritate Publică</h4>
                <p className="text-slate-600 mb-4">
                  Raportează comportamente neadecvate ale funcționarilor publici într-un mod oficial și confidențial.
                </p>
                <div className="text-sm text-slate-500">
                  Toate reclamațiile sunt investigate cu seriozitate și confidențialitate.
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-slate-900">Formular de Reclamație</h4>
                <Button variant="ghost" onClick={() => setShowComplaintForm(false)} className="text-slate-600">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Numele Ofițerului</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="ex: John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nr. Matricol (dacă este cunoscut)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="ex: LSPD-001"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Data Incidentului</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ora Aproximativă</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descrierea Detaliată a Incidentului
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Descrie în detaliu ce s-a întâmplat..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Martori (dacă există)</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Numele martorilor, dacă există"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="anonymous" className="rounded" />
                  <label htmlFor="anonymous" className="text-sm text-slate-700">
                    Doresc să rămân anonim
                  </label>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                    Trimite Reclamația
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowComplaintForm(false)}>
                    Anulează
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      )}

      {activeService === "feedback" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Feedback Pozitiv</h3>
            <Button onClick={() => setShowFeedbackForm(true)} className="bg-green-600 hover:bg-green-700 text-white">
              <Heart className="h-4 w-4 mr-2" />
              Laudă un Ofițer
            </Button>
          </div>

          {!showFeedbackForm ? (
            <Card className="p-6">
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Recunoaștere Pozitivă</h4>
                <p className="text-slate-600 mb-4">
                  Apreciază serviciul excepțional al funcționarilor publici și contribuie la îmbunătățirea comunității.
                </p>
                <div className="text-sm text-slate-500">
                  Feedback-ul pozitiv motivează și recompensează comportamentul exemplar.
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-slate-900">Formular de Apreciere</h4>
                <Button variant="ghost" onClick={() => setShowFeedbackForm(false)} className="text-slate-600">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Numele Ofițerului</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ex: Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nr. Matricol (dacă este cunoscut)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="ex: EMS-005"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ce a făcut bine?</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Descrie interacțiunea pozitivă și de ce apreciezi serviciul oferit..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Categoria Serviciului</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Selectează categoria</option>
                    <option value="medical">Servicii Medicale</option>
                    <option value="police">Servicii de Poliție</option>
                    <option value="mechanic">Servicii Mecanice</option>
                    <option value="other">Altele</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                    Trimite Aprecierea
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowFeedbackForm(false)}>
                    Anulează
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      )}

      {activeService === "applications" && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900">Aplicațiile Mele</h3>

          <div className="space-y-4">
            {myApplications.map((application) => (
              <Card key={application.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-slate-900">{application.position}</h4>
                      <span className="text-sm text-slate-600">#{application.id}</span>
                    </div>

                    <div className="text-sm text-slate-600 mb-3">
                      <span className="font-medium">{application.department}</span> • Aplicat pe{" "}
                      {application.appliedDate}
                    </div>

                    {application.interviewDate && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-900">
                            Interviu programat: {application.interviewDate}
                          </span>
                        </div>
                      </div>
                    )}

                    <p className="text-sm text-slate-600">{application.notes}</p>
                  </div>

                  <div className="text-right">
                    {application.status === "interview_scheduled" && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Interviu Programat
                      </div>
                    )}
                    {application.status === "under_review" && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        În Evaluare
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Aplicație pentru {availablePositions[selectedApplication as keyof typeof availablePositions]?.name}
              </h3>
              <Button variant="ghost" onClick={() => setSelectedApplication(null)} className="text-slate-600">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nume</label>
                  <input
                    type="text"
                    value="John"
                    disabled
                    className="w-full px-3 py-2 border border-slate-300 rounded-md bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prenume</label>
                  <input
                    type="text"
                    value="Doe"
                    disabled
                    className="w-full px-3 py-2 border border-slate-300 rounded-md bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Vârsta</label>
                <input
                  type="number"
                  value="25"
                  disabled
                  className="w-full px-3 py-2 border border-slate-300 rounded-md bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  De ce doriți să vă alăturați acestei organizații?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Explicați motivația și experiența relevantă..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-sm text-slate-700">
                  Sunt de acord cu termenii și condițiile organizației
                </label>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Trimite Aplicația
                </Button>
                <Button type="button" variant="outline" onClick={() => setSelectedApplication(null)}>
                  Anulează
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}

function SettingsContent() {
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("ro")
  const [notifications, setNotifications] = useState({
    jobUpdates: true,
    academyReminders: true,
    licenseExpiry: true,
    systemAlerts: true,
    soundEffects: true,
    vibration: false,
  })
  const [settingsInterface, setSettingsInterface] = useState({
    compactMode: false,
    showAnimations: true,
    autoSave: true,
    quickAccess: true,
    tooltips: true,
  })
  const [settingsAccessibility, setSettingsAccessibility] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    colorBlind: false,
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }))
  }

  const handleInterfaceChange = (key: string, value: boolean) => {
    setSettingsInterface((prev) => ({ ...prev, [key]: value }))
  }

  const handleAccessibilityChange = (key: string, value: boolean) => {
    setSettingsAccessibility((prev) => ({ ...prev, [key]: value }))
  }

  const resetToDefaults = () => {
    setTheme("dark")
    setLanguage("ro")
    setNotifications({
      jobUpdates: true,
      academyReminders: true,
      licenseExpiry: true,
      systemAlerts: true,
      soundEffects: true,
      vibration: false,
    })
    setSettingsInterface({
      compactMode: false,
      showAnimations: true,
      autoSave: true,
      quickAccess: true,
      tooltips: true,
    })
    setSettingsAccessibility({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      colorBlind: false,
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Setări și Preferințe</h2>
        <Button
          variant="outline"
          onClick={resetToDefaults}
          className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 bg-transparent"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Resetează la Implicit
        </Button>
      </div>

      {/* Theme Settings */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Palette className="w-5 h-5" />
            Aspect
          </CardTitle>
          <CardDescription className="text-slate-600">Personalizează aspectul vizual al tabletei</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-700">Temă</Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="bg-white border-slate-300 text-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">Mod Întunecat</SelectItem>
                <SelectItem value="light">Mod Luminos</SelectItem>
                <SelectItem value="auto">Automat (Sistem)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-700">Limbă / Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="bg-white border-slate-300 text-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ro">Română</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Bell className="w-5 h-5" />
            Notificări
          </CardTitle>
          <CardDescription className="text-slate-600">Controlează ce notificări primești</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="job-updates" className="text-slate-700">
                Actualizări Job
              </Label>
              <Switch
                id="job-updates"
                checked={notifications.jobUpdates}
                onCheckedChange={(checked) => handleNotificationChange("jobUpdates", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="academy-reminders" className="text-slate-700">
                Reminder-uri Academie
              </Label>
              <Switch
                id="academy-reminders"
                checked={notifications.academyReminders}
                onCheckedChange={(checked) => handleNotificationChange("academyReminders", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="license-expiry" className="text-slate-700">
                Expirare Permise
              </Label>
              <Switch
                id="license-expiry"
                checked={notifications.licenseExpiry}
                onCheckedChange={(checked) => handleNotificationChange("licenseExpiry", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="system-alerts" className="text-slate-700">
                Alerte Sistem
              </Label>
              <Switch
                id="system-alerts"
                checked={notifications.systemAlerts}
                onCheckedChange={(checked) => handleNotificationChange("systemAlerts", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sound-effects" className="text-slate-700">
                Efecte Sonore
              </Label>
              <Switch
                id="sound-effects"
                checked={notifications.soundEffects}
                onCheckedChange={(checked) => handleNotificationChange("soundEffects", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="vibration" className="text-slate-700">
                Vibrații
              </Label>
              <Switch
                id="vibration"
                checked={notifications.vibration}
                onCheckedChange={(checked) => handleNotificationChange("vibration", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interface Settings */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Monitor className="w-5 h-5" />
            Interfață
          </CardTitle>
          <CardDescription className="text-slate-600">Personalizează comportamentul interfeței</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="compact-mode" className="text-slate-700">
                  Mod Compact
                </Label>
                <p className="text-sm text-slate-500">Reduce spațierea și padding-ul</p>
              </div>
              <Switch
                id="compact-mode"
                checked={settingsInterface.compactMode}
                onCheckedChange={(checked) => handleInterfaceChange("compactMode", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="show-animations" className="text-slate-700">
                  Afișează Animații
                </Label>
                <p className="text-sm text-slate-500">Activează tranziții fluide</p>
              </div>
              <Switch
                id="show-animations"
                checked={settingsInterface.showAnimations}
                onCheckedChange={(checked) => handleInterfaceChange("showAnimations", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-save" className="text-slate-700">
                  Salvare Automată
                </Label>
                <p className="text-sm text-slate-500">Salvează automat progresul</p>
              </div>
              <Switch
                id="auto-save"
                checked={settingsInterface.autoSave}
                onCheckedChange={(checked) => handleInterfaceChange("autoSave", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="quick-access" className="text-slate-700">
                  Bara Acces Rapid
                </Label>
                <p className="text-sm text-slate-500">Afișează acțiuni frecvente</p>
              </div>
              <Switch
                id="quick-access"
                checked={settingsInterface.quickAccess}
                onCheckedChange={(checked) => handleInterfaceChange("quickAccess", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="tooltips" className="text-slate-700">
                  Afișează Tooltip-uri
                </Label>
                <p className="text-sm text-slate-500">Afișează sfaturi utile</p>
              </div>
              <Switch
                id="tooltips"
                checked={settingsInterface.tooltips}
                onCheckedChange={(checked) => handleInterfaceChange("tooltips", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Settings */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Accessibility className="w-5 h-5" />
            Accesibilitate
          </CardTitle>
          <CardDescription className="text-slate-600">Opțiuni pentru îmbunătățirea accesibilității</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="high-contrast" className="text-slate-700">
                  Contrast Ridicat
                </Label>
                <p className="text-sm text-slate-500">Mărește contrastul culorilor</p>
              </div>
              <Switch
                id="high-contrast"
                checked={settingsAccessibility.highContrast}
                onCheckedChange={(checked) => handleAccessibilityChange("highContrast", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="large-text" className="text-slate-700">
                  Text Mare
                </Label>
                <p className="text-sm text-slate-500">Mărește dimensiunea fontului</p>
              </div>
              <Switch
                id="large-text"
                checked={settingsAccessibility.largeText}
                onCheckedChange={(checked) => handleAccessibilityChange("largeText", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reduced-motion" className="text-slate-700">
                  Mișcare Redusă
                </Label>
                <p className="text-sm text-slate-500">Minimizează animațiile</p>
              </div>
              <Switch
                id="reduced-motion"
                checked={settingsAccessibility.reducedMotion}
                onCheckedChange={(checked) => handleAccessibilityChange("reducedMotion", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="screen-reader" className="text-slate-700">
                  Suport Screen Reader
                </Label>
                <p className="text-sm text-slate-500">Compatibilitate îmbunătățită</p>
              </div>
              <Switch
                id="screen-reader"
                checked={settingsAccessibility.screenReader}
                onCheckedChange={(checked) => handleAccessibilityChange("screenReader", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="color-blind" className="text-slate-700">
                  Prietenos Daltonism
                </Label>
                <p className="text-sm text-slate-500">Ajustează culorile pentru daltonism</p>
              </div>
              <Switch
                id="color-blind"
                checked={settingsAccessibility.colorBlind}
                onCheckedChange={(checked) => handleAccessibilityChange("colorBlind", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Information */}
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Info className="w-5 h-5" />
            Informații Sistem
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-500">Versiune Tabletă:</span>
              <span className="ml-2 font-mono text-slate-700">v3.0.1</span>
            </div>
            <div>
              <span className="text-slate-500">Server:</span>
              <span className="ml-2 font-mono text-slate-700">ANO-RP-01</span>
            </div>
            <div>
              <span className="text-slate-500">Ultima Sincronizare:</span>
              <span className="ml-2 font-mono text-slate-700">acum 2 minute</span>
            </div>
            <div>
              <span className="text-slate-500">Stocare Folosită:</span>
              <span className="ml-2 font-mono text-slate-700">3.7 MB / 15 MB</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Exportă Setări
              </Button>
              <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400 bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Importă Setări
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-red-300 hover:border-red-400 text-red-600 bg-transparent"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Șterge Date
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function EncountersContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Encounters & Tasks</h2>
      <p className="text-muted-foreground">Daily tasks and encounter system coming soon...</p>
    </div>
  )
}
