export default function Footer() {
  return (
    <footer className="bg-gray-200 h-[10vh] flex items-center justify-center">
      <div className="text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} mfe-shopping-poc. All rights reserved. Contact to Quang Pham
      </div>
    </footer>
  );
}
