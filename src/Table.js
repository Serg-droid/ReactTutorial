const TableHeader = () => (
    <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
    </thead>
)

const TableBody = ({ characterData, removeCharacter }) => (
    <tbody>
        {characterData.map((char, index) => (
            <tr key={index}>
                <td>{char.name}</td>
                <td>{char.job}</td>
                <td>
                    <button onClick={() => removeCharacter(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
)

function Table({ characterData, removeCharacter }) {
    return (
        <table>
            <TableHeader />
            <TableBody
                characterData={characterData}
                removeCharacter={removeCharacter}
            />
        </table>
    )
}

export default Table
