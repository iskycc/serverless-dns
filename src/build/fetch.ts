const [url, dest] = Deno.args;

if (!url || !dest) {
  console.error("usage: fetch.ts <url> <dest>");
  Deno.exit(64);
}

const res = await fetch(url);
if (!res.ok) {
  console.error(`${url}: ${res.status} ${res.statusText}`);
  Deno.exit(22);
}

await Deno.writeFile(dest, new Uint8Array(await res.arrayBuffer()));
