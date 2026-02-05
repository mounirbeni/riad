export function ContactForm() {
  return (
    <form className="space-y-4 rounded-3xl border border-charcoal/10 bg-white p-8 shadow-soft dark:border-[#f5f1e9]/10 dark:bg-[#1a1916]">
      <div>
        <label htmlFor="name" className="text-sm text-charcoal/80 dark:text-[#f5f1e9]/70">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal outline-none focus:border-olive dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-charcoal/80 dark:text-[#f5f1e9]/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal outline-none focus:border-olive dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-charcoal/80 dark:text-[#f5f1e9]/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-warmwhite px-4 py-3 text-sm text-charcoal outline-none focus:border-olive dark:border-[#f5f1e9]/20 dark:bg-[#141311] dark:text-[#f5f1e9]"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-warmwhite transition hover:translate-y-[-1px]"
      >
        Send Inquiry
      </button>
    </form>
  );
}
