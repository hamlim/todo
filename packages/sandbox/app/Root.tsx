import type { Root } from '@juicy-js/guava'

export default function Root({ request }: Root) {
  console.log(request.headers)
}
