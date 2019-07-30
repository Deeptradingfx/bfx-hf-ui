import { connect } from 'react-redux'

import TableActions from '../../redux/actions/table'
import EditorActions from '../../redux/actions/editor'

import AlgoOrderDefinitionsTableView from './AlgoOrderDefinitionsTable'

const mapStateToProps = (state = {}) => {
  const { algoOrders = [], orders = [] } = state.table
  const { editorOpened = false } = state.editor
  return {
    algoOrders,
    orders,
    editorOpened,
  }
}

const mapDispatchToProps = dispatch => ({
  changeStatus: (index) => {
    dispatch(TableActions.changeStatus(index))
  },
  toggleEditor: (flag) => {
    dispatch(EditorActions.toggleEditor(flag))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AlgoOrderDefinitionsTableView)