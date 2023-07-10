"use client";

import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();

  return (
    <button type="button" className="absolute left-0 top-0 h-5 w-5 ml-10 mt-10"  onClick={() => router.back()}>
    <svg  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /></svg>    </button>
  );
}
export default GoBackButton;

