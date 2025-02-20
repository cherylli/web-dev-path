import Link from 'next/link';

export default function Blog() {
  return (
    <div className="blog">
      <h2>Blog Page</h2>
      <p>We're building this page. Stay tuned!</p>
      <ul>
        <li>
          <Link href="/blog/first-post">
            <a>First Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
