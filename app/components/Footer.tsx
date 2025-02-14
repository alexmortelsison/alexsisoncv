export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 p-2 border-t border-gray-600 w-full max-w-4xl mx-auto flex items-center justify-center font-mono text-muted-foreground">
      <h3 className="flex items-center space-x-4">
        &copy;
        <p className="flex-1">{year}</p>
        <span>Alex Sison</span>
      </h3>
    </footer>
  );
}
