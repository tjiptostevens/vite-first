import { useEffect, useState } from "react";

type Comment = {
  id: number;
  email: string;
  body: string;
};

const TablePage = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (!response.ok) {
          const body = await response.text();
          throw new Error(body);
        }

        const responseJson: Comment[] = await response.json();

        setComments(responseJson);
      } catch (err) {
        if (typeof err === "string") {
          console.log(err);
        }
      }
    })();
  }, []);

  const deleteBtn = (data: Comment) => {
    let commentFil = comments.filter((com) => com.id !== data.id);
    setComments(commentFil);
  };

  return (
    <>
      <p>Ini adalah halaman Table</p>
      <div className="w-100" style={{ maxHeight: "70vh", overflow: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: tablePage - Table Render (7) */}
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
                <td>
                  <button onClick={() => deleteBtn(comment)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablePage;
