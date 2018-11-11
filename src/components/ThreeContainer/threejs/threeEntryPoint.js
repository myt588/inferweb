import * as THREE from 'three'
import { CSS3DObject, CSS3DRenderer } from './CSS3DRenderer.js'
import { TrackballControls } from './TrackballControls'
import TWEEN from '@tweenjs/tween.js'
import product from '../../../images/product.svg'

export default container => {
  var table = [
    'H', 'Hydrogen', '1.00794', 1, 1,
    'He', 'Helium', '4.002602', 18, 1,
    'Li', 'Lithium', '6.941', 1, 2,
    'Be', 'Beryllium', '9.012182', 2, 2,
    'B', 'Boron', '10.811', 13, 2,
    'C', 'Carbon', '12.0107', 14, 2,
    'N', 'Nitrogen', '14.0067', 15, 2
  ]

  var camera, scene, renderer
  var controls

  var objects = []
  var targets = { helix: [], grid: [] }
  var elementWidth = 2000

  init()
  animate()

  function init () {
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000)
    camera.position.z = 10000

    scene = new THREE.Scene()

    // table

    for (var i = 0; i < table.length; i += 5) {
      var element = document.createElement('IMG')
      element.setAttribute('src', product)
      element.setAttribute('alt', 'product')
      element.setAttribute('width', elementWidth)

      var object = new CSS3DObject(element)
      object.position.x = Math.random() * 4000 - 2000
      object.position.y = Math.random() * 4000 - 2000
      object.position.z = Math.random() * 4000 - 2000
      scene.add(object)

      objects.push(object)
    }

    // helix

    var vector = new THREE.Vector3()

    for (i = 0; i < objects.length; i++) {
      var phi = i + Math.PI

      var objectHelix = new THREE.Object3D()

      objectHelix.position.x = 3000 * Math.sin(phi)
      objectHelix.position.y = -(i * 500) + 450
      objectHelix.position.z = 3000 * Math.cos(phi)

      vector.x = objectHelix.position.x * 2
      vector.y = objectHelix.position.y
      vector.z = objectHelix.position.z * 2

      objectHelix.lookAt(vector)

      targets.helix.push(objectHelix)
    }

    // grid

    for (i = 0; i < objects.length; i++) {
      var objectGrid = new THREE.Object3D()
      objectGrid.position.x = i * (elementWidth / 2 + 500) - 5000
      objectGrid.position.y = (i % 2) * (elementWidth / 2 - 100) - 900
      objectGrid.position.z = (Math.floor(i / 25)) * 1000 - 2000
      targets.grid.push(objectGrid)
    }

    renderer = new CSS3DRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5)
    renderer.domElement.style.position = 'absolute'
    document.getElementById('container').appendChild(renderer.domElement)

    controls = new TrackballControls(camera, renderer.domElement)
    controls.rotateSpeed = 0.5
    controls.minDistance = 500
    controls.maxDistance = 6000
    controls.addEventListener('change', render)

    var buttonGrid = document.getElementById('helix')
    buttonGrid.addEventListener('click', function (event) {
      transform(targets.helix, 2000)
    }, false)

    var buttonHelix = document.getElementById('grid')
    buttonHelix.addEventListener('click', function (event) {
      transform(targets.grid, 2000)
    }, false)

    transform(targets.grid, 2000)

    window.addEventListener('resize', onWindowResize, false)
  }

  function transform (targets, duration) {
    TWEEN.removeAll()

    for (var i = 0; i < objects.length; i++) {
      var object = objects[i]
      var target = targets[i]

      new TWEEN.Tween(object.position)
        .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start()

      new TWEEN.Tween(object.rotation)
        .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start()
    }

    new TWEEN.Tween(this)
      .to({}, duration * 2)
      .onUpdate(render)
      .start()
  }

  function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight * 0.5)

    render()
  }

  function animate () {
    requestAnimationFrame(animate)

    TWEEN.update()

    controls.update()
  }

  function render () {
    renderer.render(scene, camera)
  }
}
