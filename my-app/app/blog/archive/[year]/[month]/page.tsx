import { notFound } from "next/navigation";

type Props = {
    params: {
        year: string,
        month: string
    }
}

export default async function Archive({params}: Props) {
    const param = await params;
    const { year, month } = param;
    const yearNum = parseInt(year);
    const monthNum = parseInt(month);

    if (isNaN(yearNum) || isNaN(monthNum) || monthNum < 1 || monthNum < 1) {
        return (notFound())
    }
    const monthNames = [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
    ]
    
    return (
        <div>
            <h2>{year}年{monthNames[monthNum - 1]}</h2>
        </div>
    )
}
