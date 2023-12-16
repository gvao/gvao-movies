import { TrendsList } from "@/components/trends";
import { Title } from "@/components/typography";

export default async function TrendPage({ searchParams }: { searchParams: { page: string, type: string } }) {
  const { page, type } = searchParams

  return (
    <section>

      <div className="container">

        <div className="bg-cyan-500 h-28 flex justify-center items-center">
          <Title>GM</Title>
        </div>

        <TrendsList page={+page || 1} filterBy={type} time_window="week" />

      </div>
    </section>
  )
}