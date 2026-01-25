export default async function About() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
        <main>
            <h1 className="font-bold mb-4">About</h1>
            <p className="text-gray-600">This is the about page.</p>
        </main>
    )
}
