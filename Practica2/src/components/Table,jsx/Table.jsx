


const Table = ({ netIncomes }) => {
    const totalIncome = netIncomes.reduce((acc,company) => acc + company.income,0);
    const averageIncome = totalIncome / netIncomes.length;

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((company) => (
                        <tr key={company.brand} id={company.brand}>
                            <td>{company.brand}</td>
                            <td>${company.income.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>El ingreso promedio es de: ${Number(averageIncome.toFixed(0)).toLocaleString()}</p>
        </div>
        
    );
};

export default Table;

