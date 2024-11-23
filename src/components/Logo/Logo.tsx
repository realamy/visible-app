import { Eye, Lightbulb, Stars } from "lucide-react";
import { Link } from "react-router-dom"

export function LogoWithSpotlightIteration() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-lg p-2 rotate-12">
          <Lightbulb className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
        <Stars className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-600">
          Visible
        </span>
        <span className="text-xs text-muted-foreground -mt-1">Illuminate Talent</span>
      </div>
    </div>
  );
}

export const LogoWithEyeIteration = () => {
  return (
    <Link to="/" className="mr-6 flex items-center space-x-2">
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg" />
        <div className="absolute inset-0.5 rounded-[10px] bg-white dark:bg-black" />
        <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <Eye className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600">
          Visible
        </span>
        <span className="text-xs text-muted-foreground">
          Emerge & Excel
        </span>
      </div>
    </Link>
  )
}

export const LogoWithCircleIteration = () => {
  return (
    <Link to="/" className="mr-6 flex items-center space-x-2">
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg" />
        <div className="absolute inset-0.5 rounded-[10px] bg-white dark:bg-black" />
        <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
          <div className="absolute inset-[25%] rounded-full bg-white dark:bg-black" />
          <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
        </div>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600">
          Visible
        </span>
        <span className="text-xs text-muted-foreground">
          Emerge & Excel
        </span>
      </div>
    </Link>
  )
}