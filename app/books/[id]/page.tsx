export default async function BookDetailPage                ({ params }: { params: { id: string } }) { 
return (
    <div>
      <h1>Book Detail Page</h1>
      <p>Book ID: {params.id}</p>
    </div>
  );
}