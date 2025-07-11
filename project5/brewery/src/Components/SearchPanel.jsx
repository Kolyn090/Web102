import React from "react";

function SearchPanel(props)
{
    return (
        <div style={props.style}>
            <SearchBarZone style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                width: '100%',
                height: '10%',
                position: 'absolute',
                top: 0
            }}/>

            <SearchResultZone style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                width: '100%',
                height: '85%',
                position: 'absolute',
                bottom: 0
            }}/>
        </div>
    );
}

function SearchBarZone(props)
{
    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <InputField title="Brewery Type"/>
            <InputField title="Country"/>
            <button>Search</button>
        </div>
    );
}

function InputField(props)
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <p style={{margin:0, padding:5}}>{props.title}</p>
            <input/>
        </div>
    );
}

function SearchResultZone(props)
{
    const data = [
        { name: 'John', age: 30, city: 'New York' },
        { name: 'Jane', age: 25, city: 'Los Angeles' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
        { name: 'Mike', age: 28, city: 'Chicago' },
    ];

    return (
        <div style={{
            ...props.style,
        }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Name</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Age</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>City</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td style={{ padding: '8px' }}>{item.name}</td>
                    <td style={{ padding: '8px' }}>{item.age}</td>
                    <td style={{ padding: '8px' }}>{item.city}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPanel;
