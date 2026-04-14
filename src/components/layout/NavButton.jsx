export default function NavButton({
  id,
  label,
  currentPage,
  goToPage,
  mobile = false,
}) {
  const active = currentPage === id;

  return (
    <button
      onClick={() => goToPage(id)}
      className={`transition ${
        mobile
          ? `rounded-2xl px-4 py-3 text-left ${
              active
                ? "bg-neutral-900 text-white shadow-lg"
                : "bg-white text-neutral-700 ring-1 ring-neutral-200"
            }`
          : active
            ? "font-semibold text-neutral-900"
            : "text-neutral-500 hover:text-neutral-900"
      }`}
    >
      {label}
    </button>
  );
}