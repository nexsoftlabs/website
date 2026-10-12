import {
  Cloud,
  Compass,
  Layers,
  LayoutGrid,
  Palette,
  Plug,
  RefreshCw,
  Smartphone,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  layout: LayoutGrid,
  smartphone: Smartphone,
  layers: Layers,
  sparkles: Sparkles,
  cloud: Cloud,
  plug: Plug,
  palette: Palette,
  refresh: RefreshCw,
  users: Users,
}

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? LayoutGrid
}
