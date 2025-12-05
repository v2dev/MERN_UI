/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/categories`; params?: Router.UnknownInputParams; } | { pathname: `/contacts`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/category/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/contact/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/categories`; params?: Router.UnknownOutputParams; } | { pathname: `/contacts`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/category/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/contact/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/categories${`?${string}` | `#${string}` | ''}` | `/contacts${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/categories`; params?: Router.UnknownInputParams; } | { pathname: `/contacts`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | `/category/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | `/contact/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | { pathname: `/category/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/contact/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
