import React from 'react'
import PropTypes from 'prop-types'
import { BaseButton } from './BaseButton'
import styled from 'styled-components'

const StyledButton = styled(BaseButton)`
${ ({ theme, variant }) => theme.variants.iconButton[variant || 'primary']}
`

export const IconButton = styled(({ icon, ...rest }) => {
    let clone = React.cloneElement(icon, rest)
    return <StyledButton as={clone.type} {...rest} className={rest.className} />
})`
`

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    variant: PropTypes.string
}