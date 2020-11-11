import React, { cloneElement } from 'react'

export default props => {
    console.log(props.children)
    console.log(typeof props.children)
    
    return (
        <div>
            {
                /* opcao 1 */
                /* React.Children.map(props.children, (child) => {
                    return cloneElement(child, props)
                }) */

                /* opcao 2 */
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}