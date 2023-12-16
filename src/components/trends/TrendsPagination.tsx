import Link from "next/link"

const useTrendsPagination = (page: number) => {
    const navigationLength = 5
    const NavigationBoundary = Math.floor(navigationLength / 2)
    let navigation: number[] = []

    for (let i = 0; i < navigationLength; i++) {
        if (page > NavigationBoundary) {
            navigation.push(page - NavigationBoundary + i)
            continue
        }
        navigation.push(1 + i)
    }

    const getStyleIfEqualPage = (pageNumber: number) => pageNumber === page
        ? "bg-cyan-500 aspect-square p-2 rounded font-semibold"
        : ""

    return {
        navigation,
        getStyleIfEqualPage,

    }
}

export const TrendsPagination = ({ page }: { page: number }) => {

    const { navigation, getStyleIfEqualPage } = useTrendsPagination(page)

    return (
        <div id="pagination" className="flex justify-evenly items-center">
            {
                navigation
                    .map(pageNumber => (
                        <Link
                            key={`page-${pageNumber}`}
                            className={getStyleIfEqualPage(pageNumber)}
                            href={`?page=${pageNumber}`}>
                            {pageNumber}
                        </Link>
                    ))
            }
        </div>
    )
}