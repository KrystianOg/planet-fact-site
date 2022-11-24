import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Root, Planet } from "./pages";
import { Loading } from "./components";

const Router = () => (
	<Suspense fallback={<Loading />}>
		<Routes>
			<Route path="/">
				<Route index element={<Root />} />
				<Route path="/:name" element={<Planet />} />
			</Route>
		</Routes>
	</Suspense>
);

export default Router;
