import React, { useState, useEffect } from 'react';
import { DivContainer, DivRow, DivInput, DivLabel } from './../Form/styles';
import getAll from './../../services/GroupProjectServices'

function Form() {

    const [groups, setGroups] = useState(
        {
            groups: [[
                {
                    _id: '',
                    description: '',
                    prefix: '',
                    name: '',
                    group_cod: ''
                }
            ]],
            groupSelected: ''
        }
    );

    useEffect(() => {

        getAll().then((groups) => {
            setGroups({ groups: [groups], groupSelected: groups[0].group_cod })
        });
    }, [])

    function handleChange(event: React.FormEvent<HTMLSelectElement>) {
        setGroups({groups: groups.groups, groupSelected: event.currentTarget.value});
        console.log(groups);
    }

    return (
        <DivContainer>
            <form >
                <DivRow>
                    <DivLabel>
                        <label>Nome do projeto</label>
                    </DivLabel>
                    <DivInput>
                        <input type="text" placeholder="Nome do projeto..."></input>
                    </DivInput>
                </DivRow>
                <DivRow>
                    <DivLabel>
                        <label >Grupo</label>
                    </DivLabel>
                    <DivInput>
                        <select value={groups.groupSelected} onChange={e => handleChange(e)}>
                            {groups.groups.map(group =>
                                group.map(grp => <option key={grp.group_cod} value={grp.group_cod}>{grp.name}</option>)
                            )}
                        </select>
                    </DivInput>
                </DivRow>
                <DivRow>
                    <DivLabel>
                        <label >Imagem thumb</label>
                    </DivLabel>
                    <DivInput>
                        <input type="file"></input>
                    </DivInput>
                </DivRow>
                <DivRow>
                    <DivLabel>
                        <label >Arquivo GLTF (3D)</label>
                    </DivLabel>
                    <DivInput>
                        <input type="file"></input>
                    </DivInput>
                </DivRow>
                <DivRow>
                    <input type="submit" value="Upload"></input>
                </DivRow>
            </form>
        </DivContainer>
    )
}

export default Form;