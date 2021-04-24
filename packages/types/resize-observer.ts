import { ResizeObserver } from '@juggle/resize-observer'

/**
 * Size of a specific box.
 *
 * https://drafts.csswg.org/resize-observer-1/#resizeobserversize
 */
interface ResizeObserverSize {
  readonly inlineSize: number;
  readonly blockSize: number;
}

/**
 * Used to observe different box sizes.
 *
 * https://drafts.csswg.org/resize-observer-1/#enumdef-resizeobserverboxoptions
 */
enum ResizeObserverBoxOptions {
  BORDER_BOX = 'border-box',
  CONTENT_BOX = 'content-box',
  DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box'
}

/**
 * Options to be given to the resize observer,
 * when observing a new element.
 *
 * https://drafts.csswg.org/resize-observer-1/#dictdef-resizeobserveroptions
 */
interface ResizeObserverOptions {
  box?: 'content-box' | 'border-box' | 'device-pixel-content-box' | ResizeObserverBoxOptions;
}

/**
 * https://drafts.csswg.org/resize-observer-1/#resize-observer-entry-interface
 */
interface ResizeObserverEntry {
  readonly target: Element
  readonly contentRect: DOMRectReadOnly
  readonly borderBoxSize?: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize?: ReadonlyArray<ResizeObserverSize>
  readonly devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize>
}

/**
 * https://drafts.csswg.org/resize-observer-1/#resize-observer-callback
 */
type ResizeObserverCallback = (entries: ReadonlyArray<ResizeObserverEntry>, observer: ResizeObserver) => void;

export {
  ResizeObserverSize,
  ResizeObserverOptions,
  ResizeObserverEntry,
  ResizeObserverCallback
}
