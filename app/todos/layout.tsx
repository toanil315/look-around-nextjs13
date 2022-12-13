import { Suspense } from "react";
import TodoList from "./TodoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-x-4">
      <div>
        <Suspense fallback={<p>Loading todo list...</p>}>
          {/*@ts-ignore*/}
          <TodoList />
        </Suspense>
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
