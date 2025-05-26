"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Copy, 
  Play, 
  RotateCcw, 
  AlertCircle, 
  Download, 
  Upload, 
  Settings, 
  Palette, 
  Code2, 
  Eye, 
  Zap,
  Moon,
  Sun,
  Monitor,
  Maximize2,
  Minimize2,
  Share2,
  BookOpen,
  Sparkles,
  FileText,
  Layers,
  Terminal
} from "lucide-react"
import { toast } from "sonner"
import { useTheme } from "next-themes"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

// CodeMirror imports
import { EditorView, basicSetup } from "codemirror"
import { EditorState } from "@codemirror/state"
import { oneDark } from "@codemirror/theme-one-dark"
import { css } from "@codemirror/lang-css"

const defaultLessCode = `// 🎨 LESS Playground - Unleash Your Creativity!
@primary: #6366f1;
@secondary: #8b5cf6;
@accent: #06b6d4;
@success: #10b981;
@warning: #f59e0b;
@danger: #ef4444;

// 🎯 Design System Variables
@font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
@font-mono: 'JetBrains Mono', 'Fira Code', monospace;

@radius-sm: 4px;
@radius-md: 8px;
@radius-lg: 12px;
@radius-xl: 16px;

@shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
@shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
@shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
@shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

@spacing-xs: 0.25rem;
@spacing-sm: 0.5rem;
@spacing-md: 1rem;
@spacing-lg: 1.5rem;
@spacing-xl: 2rem;
@spacing-2xl: 3rem;

// 🚀 Advanced Mixins
.gradient(@start, @end, @direction: to right) {
  background: linear-gradient(@direction, @start, @end);
}

.glass-effect(@opacity: 0.1) {
  background: rgba(255, 255, 255, @opacity);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.button-variant(@bg, @text: white, @hover-scale: 1.05) {
  background: @bg;
  color: @text;
  padding: @spacing-sm @spacing-md;
  border-radius: @radius-md;
  border: none;
  font-family: @font-primary;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: scale(@hover-scale) translateY(-2px);
    box-shadow: @shadow-lg;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(0.98);
  }
}

.card-modern(@bg: white) {
  background: @bg;
  border-radius: @radius-lg;
  box-shadow: @shadow-md;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: @shadow-xl;
  }
}

// 🎨 Component Styles
.hero-section {
  .gradient(@primary, @secondary);
  padding: @spacing-2xl;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
  
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: @spacing-md;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
  }
  
  p {
    font-size: 1.25rem;
    opacity: 0.9;
    position: relative;
    z-index: 1;
  }
}

.feature-card {
  .card-modern();
  padding: @spacing-xl;
  text-align: center;
  
  .icon {
    width: 48px;
    height: 48px;
    margin: 0 auto @spacing-md;
    .gradient(@accent, @primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: @spacing-sm;
    color: @primary;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
}

.btn-primary {
  .button-variant(@primary);
}

.btn-secondary {
  .button-variant(@secondary);
}

.btn-success {
  .button-variant(@success);
}

.btn-glass {
  .glass-effect();
  .button-variant(transparent, @primary);
}

// 🌟 Advanced Layout
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: @spacing-lg;
  padding: @spacing-xl;
  
  .widget {
    .card-modern();
    padding: @spacing-lg;
    
    &.highlight {
      border-left: 4px solid @accent;
      .gradient(rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.05));
    }
  }
}

// 📱 Responsive Magic
@media (max-width: 768px) {
  .hero-section {
    padding: @spacing-xl @spacing-md;
    
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .dashboard {
    grid-template-columns: 1fr;
    padding: @spacing-md;
  }
}

// 🎭 Animation Keyframes
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

.pulsing {
  animation: pulse 2s ease-in-out infinite;
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}

// 🎨 Dark Mode Support
@media (prefers-color-scheme: dark) {
  .card-modern(@bg: white) {
    background: #1f2937;
    border-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  .feature-card {
    h3 {
      color: @accent;
    }
    
    p {
      color: #d1d5db;
    }
  }
}`

const exampleTemplates = [
  {
    name: "Modern Dashboard",
    description: "Clean dashboard with cards and gradients",
    code: `@primary: #3b82f6;
@secondary: #1e40af;

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}`
  },
  {
    name: "Glassmorphism",
    description: "Modern glass effect design",
    code: `@glass-bg: rgba(255, 255, 255, 0.1);
@glass-border: rgba(255, 255, 255, 0.2);

.glass-card {
  background: @glass-bg;
  backdrop-filter: blur(10px);
  border: 1px solid @glass-border;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`
  },
  {
    name: "Neon Buttons",
    description: "Cyberpunk-style glowing buttons",
    code: `@neon-blue: #00f5ff;
@neon-pink: #ff006e;

.neon-button {
  background: transparent;
  border: 2px solid @neon-blue;
  color: @neon-blue;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px @neon-blue;
    text-shadow: 0 0 10px @neon-blue;
  }
}`
  }
]

interface CodeMirrorEditorProps {
  value: string
  onChange: (value: string) => void
  language?: any
  theme?: any
  readOnly?: boolean
  fontSize?: number
  lineNumbers?: boolean
}

function CodeMirrorEditor({ 
  value, 
  onChange, 
  language, 
  theme, 
  readOnly = false,
  fontSize = 14,
  lineNumbers = true
}: CodeMirrorEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    if (!editorRef.current) return

    const extensions = [
      basicSetup,
      language || css(),
      theme || oneDark,
      EditorView.updateListener.of((update) => {
        if (update.docChanged && !readOnly) {
          onChange(update.state.doc.toString())
        }
      }),
      EditorState.readOnly.of(readOnly),
      EditorView.theme({
        "&": {
          height: "100%",
          fontSize: `${fontSize}px`,
        },
        ".cm-scroller": {
          fontFamily: "JetBrains Mono, Consolas, Monaco, monospace",
          lineHeight: "1.6",
        },
        ".cm-focused": {
          outline: "none",
        },
        ".cm-editor": {
          borderRadius: "8px",
        },
        ".cm-content": {
          padding: "16px",
        },
        ".cm-gutters": {
          display: lineNumbers ? "block" : "none",
        },
      }),
    ]

    const state = EditorState.create({
      doc: value,
      extensions,
    })

    const view = new EditorView({
      state,
      parent: editorRef.current,
    })

    viewRef.current = view

    return () => {
      view.destroy()
    }
  }, [])

  useEffect(() => {
    if (viewRef.current && viewRef.current.state.doc.toString() !== value) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: value,
        },
      })
    }
  }, [value])

  return <div ref={editorRef} className="h-full" />
}

function LivePreview({ css }: { css: string }) {
  return (
    <div className="h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="p-6 h-full overflow-auto">
        <div className="hero-section">
          <h1>Live Preview</h1>
          <p>Your LESS styles are applied here in real-time!</p>
        </div>
        
        <div className="dashboard">
          <div className="widget highlight">
            <h3>Feature Card</h3>
            <p>This demonstrates your compiled styles</p>
            <button className="btn-primary">Primary Button</button>
          </div>
          
          <div className="widget">
            <h3>Another Widget</h3>
            <p>See how your LESS variables and mixins work</p>
            <button className="btn-secondary">Secondary</button>
          </div>
          
          <div className="widget">
            <h3>Glass Effect</h3>
            <p>Modern glassmorphism design</p>
            <button className="btn-glass">Glass Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LessPlayground() {
  const [lessCode, setLessCode] = useState(defaultLessCode)
  const [compiledCss, setCompiledCss] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isCompiling, setIsCompiling] = useState(false)
  const [activeTab, setActiveTab] = useState("editor")
  const [fontSize, setFontSize] = useState(14)
  const [autoCompile, setAutoCompile] = useState(true)
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { theme, setTheme } = useTheme()

  const compileLess = useCallback(async (code: string) => {
    setIsCompiling(true)
    setError(null)

    try {
      const result = await window.less.render(code, {
      })
      setCompiledCss(result.css)
    } catch (err: any) {
      setError(err.message || "Compilation error")
      setCompiledCss("")
    } finally {
      setIsCompiling(false)
    }
  }, [])

  useEffect(() => {
    if (!autoCompile) return
    
    const timeoutId = setTimeout(() => {
      compileLess(lessCode)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [lessCode, compileLess, autoCompile])

  const handleCopyCSS = async () => {
    try {
      await navigator.clipboard.writeText(compiledCss)
      toast.success("CSS copied to clipboard!", {
        description: "Ready to paste into your project"
      })
    } catch (err) {
      toast.error("Failed to copy CSS")
    }
  }

  const handleDownloadCSS = () => {
    const blob = new Blob([compiledCss], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'styles.css'
    a.click()
    URL.revokeObjectURL(url)
    toast.success("CSS file downloaded!")
  }

  const handleReset = () => {
    setLessCode(defaultLessCode)
    toast.info("Reset to default template")
  }

  const handleCompile = () => {
    compileLess(lessCode)
  }

  const handleLoadTemplate = (template: typeof exampleTemplates[0]) => {
    setLessCode(template.code)
    toast.success(`Loaded template: ${template.name}`)
  }

  const handleShare = async () => {
    try {
      const encoded = btoa(encodeURIComponent(lessCode))
      const url = `${window.location.origin}${window.location.pathname}?code=${encoded}`
      await navigator.clipboard.writeText(url)
      toast.success("Share link copied!", {
        description: "Anyone can use this link to view your code"
      })
    } catch (err) {
      toast.error("Failed to create share link")
    }
  }

  return (
    <TooltipProvider>
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500 ${isFullscreen ? 'p-0' : 'p-4'}`}>
        <div className={`mx-auto ${isFullscreen ? 'max-w-none h-screen' : 'max-w-7xl'}`}>
          {/* Header */}
          {!isFullscreen && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      LESS Playground
                    </h1>
                    <p className="text-sm text-muted-foreground">The most advanced LESS compiler and playground</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      >
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Toggle theme</TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={handleShare}>
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share code</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={isCompiling ? "secondary" : error ? "destructive" : "default"}
                      className="flex items-center gap-1"
                    >
                      {isCompiling ? (
                        <>
                          <Terminal className="h-3 w-3 animate-pulse" />
                          Compiling...
                        </>
                      ) : error ? (
                        <>
                          <AlertCircle className="h-3 w-3" />
                          Error
                        </>
                      ) : (
                        <>
                          <Zap className="h-3 w-3" />
                          Ready
                        </>
                      )}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Label htmlFor="auto-compile" className="text-sm">Auto-compile</Label>
                    <Switch
                      id="auto-compile"
                      checked={autoCompile}
                      onCheckedChange={setAutoCompile}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Select value={fontSize.toString()} onValueChange={(value) => setFontSize(Number(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12px</SelectItem>
                      <SelectItem value="14">14px</SelectItem>
                      <SelectItem value="16">16px</SelectItem>
                      <SelectItem value="18">18px</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button onClick={handleCompile} size="sm" disabled={isCompiling}>
                    <Play className="h-4 w-4 mr-1" />
                    Compile
                  </Button>
                  
                  <Button onClick={handleReset} variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                  
                  <Button onClick={handleCopyCSS} variant="outline" size="sm" disabled={!compiledCss}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  
                  <Button onClick={handleDownloadCSS} variant="outline" size="sm" disabled={!compiledCss}>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>

                  <Button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    variant="outline"
                    size="sm"
                  >
                    {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive" className="mb-4 border-red-200 bg-red-50 dark:bg-red-900/20">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Compilation Error:</strong> {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Main Content */}
          <div className={`${isFullscreen ? 'h-screen' : 'h-[calc(100vh-280px)]'}`}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="editor" className="flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  Editor
                </TabsTrigger>
                <TabsTrigger value="preview" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Live Preview
                </TabsTrigger>
                <TabsTrigger value="split" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Split View
                </TabsTrigger>
                <TabsTrigger value="templates" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Templates
                </TabsTrigger>
              </TabsList>

                             <TabsContent value="editor" className="h-[calc(100%-60px)]">
                 <ResizablePanelGroup direction="horizontal" className="h-full">
                   <ResizablePanel defaultSize={50} minSize={30}>
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            LESS Code
                          </span>
                          <Badge variant="outline">.less</Badge>
                        </CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent className="flex-1 p-0">
                        <CodeMirrorEditor 
                          value={lessCode} 
                          onChange={setLessCode} 
                          theme={oneDark}
                          fontSize={fontSize}
                          lineNumbers={showLineNumbers}
                        />
                      </CardContent>
                                         </Card>
                   </ResizablePanel>
                   
                   <ResizableHandle withHandle />
                   
                   <ResizablePanel defaultSize={50} minSize={30}>
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Palette className="h-5 w-5" />
                            Compiled CSS
                          </span>
                          <Badge variant="outline">.css</Badge>
                        </CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent className="flex-1 p-0">
                        <CodeMirrorEditor 
                          value={compiledCss} 
                          onChange={() => {}} 
                          language={css()} 
                          theme={oneDark} 
                          readOnly
                          fontSize={fontSize}
                          lineNumbers={showLineNumbers}
                        />
                      </CardContent>
                    </Card>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </TabsContent>

              <TabsContent value="preview" className="h-[calc(100%-60px)]">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Live Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[calc(100%-80px)] p-0">
                    <LivePreview css={compiledCss} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="split" className="h-[calc(100%-60px)]">
                <ResizablePanelGroup direction="horizontal" className="h-full">
                  <ResizablePanel defaultSize={40} minSize={25}>
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          LESS Code
                        </CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent className="flex-1 p-0">
                        <CodeMirrorEditor 
                          value={lessCode} 
                          onChange={setLessCode} 
                          theme={oneDark}
                          fontSize={fontSize}
                          lineNumbers={showLineNumbers}
                        />
                      </CardContent>
                    </Card>
                  </ResizablePanel>
                  
                  <ResizableHandle withHandle />
                  
                  <ResizablePanel defaultSize={30} minSize={20}>
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2">
                          <Palette className="h-5 w-5" />
                          CSS Output
                        </CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent className="flex-1 p-0">
                        <CodeMirrorEditor 
                          value={compiledCss} 
                          onChange={() => {}} 
                          language={css()} 
                          theme={oneDark} 
                          readOnly
                          fontSize={fontSize}
                          lineNumbers={showLineNumbers}
                        />
                      </CardContent>
                    </Card>
                  </ResizablePanel>
                  
                  <ResizableHandle withHandle />
                  
                  <ResizablePanel defaultSize={30} minSize={20}>
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2">
                          <Eye className="h-5 w-5" />
                          Live Preview
                        </CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent className="h-[calc(100%-80px)] p-0">
                        <LivePreview css={compiledCss} />
                      </CardContent>
                    </Card>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </TabsContent>

              <TabsContent value="templates" className="h-[calc(100%-60px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                  {exampleTemplates.map((template, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mb-4">
                          <code className="text-xs">{template.code.slice(0, 100)}...</code>
                        </div>
                        <Button 
                          onClick={() => handleLoadTemplate(template)}
                          className="w-full"
                        >
                          Load Template
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Footer */}
          {!isFullscreen && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                Built with{" "}
                <a
                  href="https://lesscss.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  LESS
                </a>
                ,{" "}
                <a
                  href="https://codemirror.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  CodeMirror
                </a>
                , and{" "}
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  shadcn/ui
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}

