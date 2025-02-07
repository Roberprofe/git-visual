$(document).ready(function () {
  $("#fetchData").click(function () {
    $.ajax({
      url: "https://despliegue-express-back.vercel.app/api/users/user1",
      method: "GET",
      success: function (data) {
        $("#result").html(
          "<p>ID: " +
            data.id +
            ", Nombre: " +
            data.nombre +
            ", Apellido: " +
            data.apellido +
            ", Teléfono: " +
            data.tlf +
            "</p>"
        )
      },
      error: function () {
        $("#result").html("<p>Error al obtener los datos</p>")
      },
    })
  })

  $("#fetchAllUsers").click(function () {
    $.ajax({
      url: "https://despliegue-express-back.vercel.app/api/users",
      method: "GET",
      success: function (data) {
        let resultHtml = "<ul>"
        data.forEach(function (user) {
          resultHtml +=
            "<li>ID: " +
            user.id +
            ", Nombre: " +
            user.nombre +
            ", Apellido: " +
            user.apellido +
            ", Teléfono: " +
            user.tlf +
            "</li>"
        })
        resultHtml += "</ul>"
        $("#result").html(resultHtml)
      },
      error: function () {
        $("#result").html("<p>Error al obtener los datos</p>")
      },
    })
  })

  $("#fetchUserById").click(function () {
    const userId = $("#userId").val()
    $.ajax({
      url: `https://despliegue-express-back.vercel.app/api/users/${userId}`,
      method: "GET",
      success: function (data) {
        $("#result").html(
          "<p>ID: " +
            data.id +
            ", Nombre: " +
            data.nombre +
            ", Apellido: " +
            data.apellido +
            ", Teléfono: " +
            data.tlf +
            "</p>"
        )
      },
      error: function () {
        $("#result").html("<p>Error al obtener los datos</p>")
      },
    })
  })
  $("#addUser").click(function () {
    const newUser = {
      nombre: $("#newUserName").val(),
      apellido: $("#newUserLastName").val(),
      tlf: $("#newUserPhone").val(),
    }
    $.ajax({
      url: "https://despliegue-express-back.vercel.app/api/users",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(newUser),
      success: function () {
        $("#result").html("<p>Usuario añadido con éxito: " + "</p>")
      },
      error: function () {
        $("#result").html("<p>Error al añadir el usuario</p>")
      },
    })
  })
})
