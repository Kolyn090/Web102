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
            }}
            sourceData={props.sourceData}
            setRenderData={props.setRenderData}
            typeInput={props.typeInput}
            setTypeInput={props.setTypeInput}
            stateInput={props.stateInput}
            setStateInput={props.setStateInput}/>

            <SearchResultZone style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                width: '100%',
                height: '85%',
                position: 'absolute',
                bottom: 0
            }}
            renderData={props.renderData}/>
        </div>
    );
}

function SearchBarZone(props)
{
    const renderFiltered = () => {
        const typeInput = props.typeInput.toLowerCase();
        const stateInput = props.stateInput.toLowerCase();
        const filterData = props.sourceData
                            .filter(x => typeInput === "" || x.brewery_type.toLowerCase().startsWith(typeInput))
                            .filter(x => stateInput === "" || x.state.toLowerCase().startsWith(stateInput));
        props.setRenderData(filterData.slice(0, 10));
    };

    const handleTypeChange = (e) => {
        props.setTypeInput(e.target.value);
    }

    const handleStateChange = (e) => {
        props.setStateInput(e.target.value);
    }

    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <InputField title="Brewery Type" type="text" value={props.typeInput} onChange={handleTypeChange}/>
            <InputField title="State" type="text" value={props.stateInput} onChange={handleStateChange}/>
            <button onClick={renderFiltered}>Search</button>
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
            <input type={props.type} value={props.value} onChange={props.onChange}/>
        </div>
    );
}

function SearchResultZone(props)
{
    return (
        <div style={{
            ...props.style,
        }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Name</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Brewery Type</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>State</th>
                        <th style={{ textAlign: 'center', padding: '8px' }}>Address</th>
                    </tr>
                </thead>
                <tbody>
                {props.renderData.map((item, index) => (
                    <tr key={item.id}>
                    <td style={{ padding: '8px' }}>{item.name}</td>
                    <td style={{ padding: '8px' }}>{item.brewery_type}</td>
                    <td style={{ padding: '8px' }}>{item.state}</td>
                    <td style={{ padding: '8px' }}>{item.address_1}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPanel;
