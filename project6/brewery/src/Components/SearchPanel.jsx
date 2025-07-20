import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

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
            setStateInput={props.setStateInput}
            numOfAddr={props.numOfAddr}
            setNumOfAddr={props.setNumOfAddr}/>

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
    const getNumberOfAddresses = (company) => {
        const a1 = company.address_1 != null ? 1 : 0;
        const a2 = company.address_2 != null ? 1 : 0;
        const a3 = company.address_3 != null ? 1 : 0;
        return a1 + a2 + a3;
    };

    const getFilteredData = () => {
        const typeInputLower = props.typeInput.toLowerCase();
        const stateInputLower = props.stateInput.toLowerCase();

        return props.sourceData
            .filter(x => typeInputLower === "" || x.brewery_type.toLowerCase().startsWith(typeInputLower))
            .filter(x => stateInputLower === "" || x.state.toLowerCase().startsWith(stateInputLower))
            .filter(x => getNumberOfAddresses(x) >= props.numOfAddr);
    };

    const renderFiltered = () => {
        props.setRenderData(getFilteredData().slice(0, 10));
    };

    useEffect(() => {
        renderFiltered();
    }, [props.typeInput, props.stateInput, props.numOfAddr, props.sourceData]);

    const handleTypeChange = (e) => props.setTypeInput(e.target.value);
    const handleStateChange = (e) => props.setStateInput(e.target.value);
    const handleNumOfAddrChange = (e) => props.setNumOfAddr(e.target.value);

    return (
        <div style={{
            ...props.style,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '25px'
        }}>
            <DropdownList title="Brewery Type" value={props.typeInput} onChange={handleTypeChange}/>
            <InputField title="State" value={props.stateInput} onChange={handleStateChange}/>
            <BoundSlider title={`Number of Addresses (≥ ${props.numOfAddr})`} min="1" max="3" step="1" 
                            value={props.numOfAddr} onChange={handleNumOfAddrChange}/>
            <button onClick={renderFiltered}>Search</button>
        </div>
    );
}

function DropdownList(props)
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <p style={{margin:0, padding:5}}>{props.title}</p>
            <select value={props.value} onChange={props.onChange}>
                <option value="">none</option>
                <option value="large">large</option>
                <option value="micro">micro</option>
            </select>
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
            <input type="text" value={props.value} onChange={props.onChange}/>
        </div>
    );
}

function BoundSlider(props)
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <p style={{margin:0, padding:5}}>{props.title}</p>
            <input type="range" min={props.min} max={props.max} step={props.step}
                    value={props.value} onChange={props.onChange}/>
        </div>
    );
}

function SearchResultZone(props)
{
    return (
        <div style={{ ...props.style }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
            <tr>
                <th style={{ textAlign: 'center', padding: '8px' }}>Name</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Brewery Type</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>State</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Address</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Details</th> {/* New header */}
            </tr>
            </thead>
            <tbody>
            {props.renderData.map((item) => (
                <tr key={item.id}>
                <td style={{ padding: '8px' }}>{item.name}</td>
                <td style={{ padding: '8px' }}>{item.brewery_type}</td>
                <td style={{ padding: '8px' }}>{item.state}</td>
                <td style={{ padding: '8px' }}>{item.address_1}</td>
                <td style={{ padding: '8px', textAlign: 'center' }}>
                    <Link
                        to={`/brewery/${item.id}`}
                        state={{ brewery: item }}
                        style={{
                            padding: '4px 8px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                        >
                        View Details
                    </Link>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default SearchPanel;
