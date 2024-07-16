export default function Category({ params }: { params: { catId: string } }) {
  return (
    <>
      <main className='flex min-h-screen w-full flex-col items-center justify-center gap-5'>
        <h1>Shop by {params.catId}</h1>
      </main>
    </>
  );
}
