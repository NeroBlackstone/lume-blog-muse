export const layout = "layouts/archive.njk";
export const title = "Archive";

export default function* (data) {
  const { search, paginate } = data
  const posts = search.pages("type=posts");

  for (const p of paginate(posts, { url, size: data.site.postsPerPage })) {
    // Show the first page in the menu
    if (p.pagination.page === 1) {
      p.menu = {
        visible: true,
        order: 1,
      };
    }
    yield p;
  }
}

function url(n) {
  if (n === 1) {
    return "/posts/";
  }

  return `/posts/${n}/`;
} 