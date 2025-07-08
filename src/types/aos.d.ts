/**
 * Website for IEEE SB CETKR
 * Copyright (C) 2024 IEEE Student Branch CETKR
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

// Global AOS interface
declare const AOS: {
  init: (config?: AosOptions) => void;
  refresh: () => void;
  refreshHard: (settings?: any) => void;
  destroy: () => void;
};

declare module 'aos' {
  export interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart';
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'center-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top';
    disable?: boolean | 'mobile' | 'phone' | 'tablet' | function;
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    ssr?: boolean;
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
  export function refreshHard(settings: { classNames: string[] }): void;
  export function refreshHard(settings: { duration: number }): void;
  export function refreshHard(settings: { offset: number }): void;
  export function refreshHard(settings: { delay: number }): void;
  export function refreshHard(settings: { easing: string }): void;
  export function refreshHard(settings: { once: boolean }): void;
  export function refreshHard(settings: { mirror: boolean }): void;
  export function refreshHard(settings: { anchorPlacement: string }): void;
  export function refreshHard(settings: { disable: boolean | string | Function }): void;
  export function refreshHard(settings: { startEvent: string }): void;
  export function refreshHard(settings: { initClassName: string }): void;
  export function refreshHard(settings: { animatedClassName: string }): void;
  export function refreshHard(settings: { useClassNames: boolean }): void;
  export function refreshHard(settings: { disableMutationObserver: boolean }): void;
  export function refreshHard(settings: { debounceDelay: number }): void;
  export function refreshHard(settings: { throttleDelay: number }): void;
  export function refreshHard(settings: { ssr: boolean }): void;
  export function refreshHard(settings: any): void;
  export function destroy(): void;
  export const version: string;
  export const defaults: AosOptions;
}
