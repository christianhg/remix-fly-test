export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Remix/Fly image proxy test</h1>
      <img src="/unsplash" />
      <p>
        Photo by{' '}
        <a href="https://unsplash.com/photos/fbhqOlTZjro">Ümit Yıldırım</a>
      </p>
    </div>
  );
}
