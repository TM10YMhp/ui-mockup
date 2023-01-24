import {data} from "@/data"
import {editingIsVisibleAtom, editingNoteIdAtom} from "@/states/editor"
import {useAtom, useAtomValue} from "jotai"
import FullScreen from '@/assets/FullScreen.svg'
import FullScreenExit from '@/assets/FullScreenExit.svg'

export default function Editor() {
  const [editingIsVisible, setEditingIsVisible ] = useAtom(editingIsVisibleAtom)
  const editingNoteId = useAtomValue(editingNoteIdAtom)

  const note = data[editingNoteId] || {
    title: '',
    body: 'Select a note'
  }

  return (
    <div
      className={`overflow-auto ${editingIsVisible ? 'block' : 'hidden'}
      sm:block w-full`}
    >
      <div className="bg-header h-10 relative grid place-items-center">
        <button
          className='absolute left-0 ml-3 w-5 cursor-pointer'
          onClick={() => setEditingIsVisible(prev => !prev)}
        >
          {editingIsVisible ? <FullScreenExit /> : <FullScreen />}
        </button>
        <p>
          Editor
        </p>
      </div>
      <div className={"p-4"}>
        <h3 className="text-lg font-bold leading-none pb-2">
          {note.title}
        </h3>
        <p className="text-sm text-justify">
          {note.body}
        </p>
      </div>
    </div>
  )
}
