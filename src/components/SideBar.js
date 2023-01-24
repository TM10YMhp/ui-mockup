import { useState } from "react";
import {sidebarIsVisibleAtom} from "@/states/sidebar"
import {useAtomValue} from "jotai"

const themes = [
  { id: 'light', name: 'Default Light' },
  { id: 'dark', name: 'Default Dark' },
  { id: 'solarized-dark', name: 'Solarized Dark' },
]

export default function SideBar() {
  const sidebarIsVisible = useAtomValue(sidebarIsVisibleAtom)
  const [selected, setSelected] = useState(window.localStorage.getItem('data-theme'))

  return (
    <div
      className={`bg-primary text-secondary transition-all max-w-[10rem]
      overflow-auto min-w-[180px] ${sidebarIsVisible ? 'hidden' : 'block'} md:block`}
    >
      <p className="p-3 text-lg pb-1 font-bold leading-none border-b mb-2">
        Notes
      </p>

      <div className='p-3 text-sm'>
        <p className="font-bold pb-2">
          Themes
        </p>
        <div className="p-2 pt-0.5 flex flex-col gap-3">
          {
            themes.map(e => (
              <p
                className='cursor-pointer w-fit hover:underline'
                onClick={() => {
                  setSelected(e.id)
                  updateTheme(e.id)
                }}
              >
                {selected === e.id ? '> ' : ''}{e.name}
              </p>
            ))
          }
        </div>
        <a href='#' className="inline-block font-bold pt-4">
          About project
        </a>
      </div>
    </div>
  )
}
