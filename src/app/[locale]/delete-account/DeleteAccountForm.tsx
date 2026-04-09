"use client";

import { useState } from "react";

interface DeleteAccountDict {
  username: string;
  usernamePlaceholder: string;
  confirmCode: string;
  confirmCodePlaceholder: string;
  confirmCodeNote: string;
  submit: string;
  errorEmpty: string;
  emailSubject: string;
  emailBodyHeader: string;
  emailBodyUsernameLabel: string;
  emailBodyConfirmCodeLabel: string;
  emailBodyMessage: string;
}

export function DeleteAccountForm({ dict }: { dict: DeleteAccountDict }) {
  const [username, setUsername] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !confirmCode.trim()) {
      setError(dict.errorEmpty);
      return;
    }

    const subject = encodeURIComponent(dict.emailSubject);
    const body = encodeURIComponent(
      `${dict.emailBodyHeader}\n\n${dict.emailBodyUsernameLabel}: ${username.trim()}\n${dict.emailBodyConfirmCodeLabel}: ${confirmCode.trim()}\n\n${dict.emailBodyMessage}`
    );

    window.location.href = `mailto:support@scorehunter.app?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-slide-up-delay-3 w-full space-y-4"
    >
      <div className="text-left">
        <label
          htmlFor="username"
          className="block text-text-secondary text-xs uppercase tracking-widest mb-2"
        >
          {dict.username}
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={dict.usernamePlaceholder}
          className="w-full glass-card px-4 py-3 bg-transparent text-text-primary placeholder-text-muted text-sm outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="text-left">
        <label
          htmlFor="confirmCode"
          className="block text-text-secondary text-xs uppercase tracking-widest mb-2"
        >
          {dict.confirmCode}
        </label>
        <input
          id="confirmCode"
          type="text"
          value={confirmCode}
          onChange={(e) => setConfirmCode(e.target.value)}
          placeholder={dict.confirmCodePlaceholder}
          className="w-full glass-card px-4 py-3 bg-transparent text-text-primary placeholder-text-muted text-sm outline-none focus:border-primary/50 transition-colors"
        />
        <p className="text-text-muted text-[11px] mt-2">
          {dict.confirmCodeNote}
        </p>
      </div>

      {error && <p className="text-red-400 text-sm text-left">{error}</p>}

      <button
        type="submit"
        className="w-full py-3 rounded-2xl bg-primary text-bg-dark font-semibold text-sm hover:bg-primary-dark transition-colors cursor-pointer mt-2"
      >
        {dict.submit}
      </button>
    </form>
  );
}
