import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/registration")) {
    const segments = pathname.split("/");
    const currentPageStr = segments[segments.length - 1];
    const currentPage = Number(currentPageStr);
    
    if (isNaN(currentPage) || currentPage < 1 || currentPage > 13) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }
};

export { middleware };
