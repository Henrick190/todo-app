import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-2xl font-bold">Page introuvable</h1>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Retour à l'accueil
      </Link>
    </section>
  )
}
