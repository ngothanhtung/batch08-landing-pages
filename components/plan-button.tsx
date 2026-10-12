"use client";

import type { ReactNode } from "react";
import type { PlanName } from "@/lib/content";

export const SELECT_PLAN_EVENT = "aura:select-plan";

/** Nút chọn gói ở bảng giá: cuộn tới form và điền sẵn gói đã chọn. */
export function PlanButton({ plan, className, children }: { plan: PlanName; className?: string; children: ReactNode }) {
  return (
    <a
      href="#dang-ky"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent<PlanName>(SELECT_PLAN_EVENT, { detail: plan }))}
    >
      {children}
    </a>
  );
}
