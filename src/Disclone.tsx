import { RouterProvider } from "react-router"

import { appRouter } from './router/app.router';


export const Disclone = () => {
  return (
    <>
      <RouterProvider router={appRouter} />


    </>
  )
}
