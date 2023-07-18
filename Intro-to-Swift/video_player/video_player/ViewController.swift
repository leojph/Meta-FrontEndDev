//
//  ViewController.swift
//  video_player
//
//  Created by Leonardo Perez on 5/26/23.
//

import UIKit
import AVKit
import AVFoundation

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        playVideo()
    }
    
    private func playVideo(){
        
        guard let
            path = Bundle.main.path(forResource: "sample-mp4-file-small", ofType:"mp4")else{
            debugPrint("sample-mp4.mp4 Not Found")
            return
        }
        let player = AVPlayer(url: URL(fileURLWithPath: path))
        
        let playerController = AVPlayerViewController()
        
        playerController.player = player
        
        present(playerController, animated: true){
            player.play()
        }
    }
    
}

