import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Seo } from '@/components/ui/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for could not be found."
        path="/404"
        noIndex
      />
      <Container className="flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-semibold tracking-wide text-indigo-brand">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          The link may be outdated or the page may have moved. Try returning home or contacting us
          about your project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </div>
      </Container>
    </>
  )
}
