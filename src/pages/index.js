import PageLayout from "@/layouts/PageLayout";
import { ClientOnly, Editor, SideBar, NoteList } from '@/components'

export default function HomePage() {
  return (
    <PageLayout>
      <ClientOnly>
        <div className="flex flex-row h-[100vh]">
          <SideBar />
          <NoteList />
          <Editor />
        </div>
      </ClientOnly>
    </PageLayout>
  )
}
