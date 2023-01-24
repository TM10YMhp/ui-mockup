import ClientOnly from '@/components/ClientOnly'
import PageLayout from '@/layouts/PageLayout'

export default function AboutPage() {
  return (
    <>
    <PageLayout title='ruta about layout'>
      <h1 className='text-2xl font-bold'>About</h1>
      <ClientOnly>
        <div>
          'cargando............'
        </div>
      </ClientOnly>
    </PageLayout>
    </>
  )
}
