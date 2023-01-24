import { data } from "@/data";
import { useAtomValue, useSetAtom} from 'jotai';
import {editingIsVisibleAtom, editingNoteIdAtom} from '@/states/editor';
import {sidebarIsVisibleAtom} from '@/states/sidebar';
import Input from "./Input";

export default function Mails() {
  const setEditingIsVisible = useSetAtom(editingIsVisibleAtom)
  const setEditingNoteId = useSetAtom(editingNoteIdAtom)
  const setSidebarIsVisible = useSetAtom(sidebarIsVisibleAtom)

  const editingIsVisible = useAtomValue(editingIsVisibleAtom)

  return (
    <div
      className={`sm:max-w-[17rem] overflow-y-auto
      ${editingIsVisible ? 'hidden' : 'block'}`}
    >
      <Input onClick={() => setSidebarIsVisible(prev => !prev)} />
      <div className='px-1 relative'>
        {
          data.map(e => (
            <div
              key={e.id}
              className='p-2 cursor-pointer'
              onClick={() => {
                if(window.innerWidth < 640) {
                  setEditingIsVisible(prev => !prev)
                }
                setEditingNoteId(e.id)
              }}
            >
              <h3 className="text-sm font-extrabold truncate">{e.title}</h3>
              <p className="text-sm opacity-70 overflow-hidden h-9">{e.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
