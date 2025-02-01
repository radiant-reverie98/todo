import React from 'react'

function Alert() {
  return (
    <div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Err!</strong> Please enter a valid task
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert
