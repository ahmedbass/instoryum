import Link from "next/link";

const PageNotFound = (props) => {
  return (
      <div className="w-full col-center-h space-y-8 p-4 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">Sorry, this page isn&apos;t
          available.</h1>
        <p className="md:text-lg">
          The link you followed may be broken, or the page may have been removed.
          <Link href="/">
            <a className="text-blue-900 mx-1">Go back to Instagram.</a>
          </Link>
        </p>
      </div>
  );
};
export default PageNotFound;
