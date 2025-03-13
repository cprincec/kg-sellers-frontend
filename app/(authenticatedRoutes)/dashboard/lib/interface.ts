// ============================================================================
// Navigation & UI Component Interfaces
// ============================================================================

export interface NavLink {
    name: string;
    href: string;
    icon: string;
    activeIcon: string;
    active?: boolean;
}
